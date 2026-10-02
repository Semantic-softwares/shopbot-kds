import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ALL_STATIONS_ID, StatusStep } from './station.service';

export interface OrderChannel {
  label: string;
  icon: string;
}

export interface OrderItemOption {
  name: string;
  price: number;
  quantity: number;
  optionItemName?: string;
}

export interface KitchenOrderItem {
  itemId: string;
  productId: string;
  name: string;
  quantity: number;
  options: OrderItemOption[];
  notes: string;
  orderedBy?: string;
  kitchenStatus: string;
  isDone: boolean;
  station: { id: string; name: string; type: string };
  statusFlow: StatusStep[];
}

export type OrderStage = 'new' | 'in_progress' | 'done';

export interface KitchenOrder {
  orderId: string;
  reference?: string;
  channel: OrderChannel;
  /** "Table - 05", "Delivery", "Take-Out", ... */
  service: string;
  person?: { name: string; kind: 'staff' | 'customer' };
  table?: { id: string; name: string };
  guestName?: string;
  note?: string;
  createdAt: string;
  orderType: OrderType;
  stage: OrderStage;
  /** The board column (status key) this ticket sits in. */
  stepKey?: string;
  /** When the ticket entered its current column — drives the timer. */
  stageSince: string;
  currentStepLabel: string;
  /** What the ticket's single button does next; null once it's done. */
  nextAction: { key: string; label: string; isFinal: boolean; shortcut?: string } | null;
  completedAt?: string;
  items: KitchenOrderItem[];
}

export type OrderType = 'dine_in' | 'takeaway' | 'delivery';

export type BoardView = 'open' | 'completed';

export interface KitchenBoard {
  /** This scope's status steps in order; every non-terminal one is a column. */
  steps: StatusStep[];
  orders: KitchenOrder[];
}

export interface AdvanceOrderResult {
  orderId: string;
  fullyPrepared: boolean;
}

/**
 * REST access to the KDS endpoints. The board treats the snapshot as the
 * single source of truth and re-fetches it whenever a socket event fires,
 * rather than merging push payloads locally.
 */
@Injectable({ providedIn: 'root' })
export class KitchenDisplayService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  getOrders(storeId: string, stationId: string | null, view: BoardView): Observable<KitchenOrder[]> {
    const params: Record<string, string> = { view };
    if (stationId && stationId !== ALL_STATIONS_ID) params['stationId'] = stationId;
    return this.http.get<KitchenOrder[]>(`${this.apiUrl}/kitchen-display/stores/${storeId}/orders`, { params });
  }

  getBoard(storeId: string, stationId: string | null): Observable<KitchenBoard> {
    const params: Record<string, string> = {};
    if (stationId && stationId !== ALL_STATIONS_ID) params['stationId'] = stationId;
    return this.http.get<KitchenBoard>(`${this.apiUrl}/kitchen-display/stores/${storeId}/board`, { params });
  }

  /** Move every item of the order (for this station) one step forward, one
   * step back (recall), or straight to `toStep` (a step's shortcut key). */
  advanceOrder(
    orderId: string,
    stationId: string | null,
    move: { direction?: 'next' | 'back'; toStep?: string } = {},
  ): Observable<AdvanceOrderResult> {
    return this.http.patch<AdvanceOrderResult>(`${this.apiUrl}/kitchen-display/orders/${orderId}/advance`, {
      stationId: stationId && stationId !== ALL_STATIONS_ID ? stationId : undefined,
      direction: move.direction ?? 'next',
      toStep: move.toStep,
    });
  }
}
