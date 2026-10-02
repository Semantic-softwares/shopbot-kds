import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  computed,
  inject,
  signal,
  viewChildren,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Subject, catchError, debounceTime, of, switchMap } from 'rxjs';
import { FocusKeyManager, LiveAnnouncer } from '@angular/cdk/a11y';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StoreService } from '../services/store.service';
import { StationService, ALL_STATIONS_ID, Station, StatusStep } from '../services/station.service';
import { DeviceTokenService } from '../services/device-token.service';
import { AuthService } from '../services/auth.service';
import { KitchenDisplayService, KitchenOrder, OrderType } from '../services/kitchen-display.service';
import { KitchenSocketService } from '../services/kitchen-socket.service';
import { I18nService } from '../services/i18n.service';
import { SoundService } from '../services/sound.service';
import { columnTone, ColumnTone } from '../shared/utils/kitchen-display.util';
import { OrderCardComponent } from './order-card/order-card.component';
import { SettingsDialogComponent, SettingsResult } from './settings-dialog/settings-dialog.component';

type TypeFilter = 'all' | OrderType;

interface BoardColumn {
  step: StatusStep;
  tone: ColumnTone;
  orders: KitchenOrder[];
}

const FRESH_FOR_MS = 10_000;
/** "Repeat" sound mode: how often an unstarted new order rings again. */
const RING_EVERY_MS = 10_000;

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatSelectModule, MatTooltipModule, OrderCardComponent],
  templateUrl: './board.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown)': 'onKeydown($event)' },
})
export class BoardComponent implements OnInit {
  private storeService = inject(StoreService);
  private stationService = inject(StationService);
  private deviceTokenService = inject(DeviceTokenService);
  private authService = inject(AuthService);
  private kitchenDisplayService = inject(KitchenDisplayService);
  private kitchenSocketService = inject(KitchenSocketService);
  private dialog = inject(MatDialog);
  private announcer = inject(LiveAnnouncer);
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private appRef = inject(ApplicationRef);
  protected i18n = inject(I18nService);
  protected sound = inject(SoundService);

  protected readonly ALL_STATIONS_ID = ALL_STATIONS_ID;
  protected readonly typeFilters: TypeFilter[] = ['all', 'dine_in', 'takeaway', 'delivery'];
  protected readonly typeIcons: Record<TypeFilter, string> = {
    all: 'apps',
    dine_in: 'restaurant',
    takeaway: 'shopping_bag',
    delivery: 'delivery_dining',
  };

  protected readonly store = this.storeService.currentStore;
  protected readonly station = this.stationService.currentStation;
  protected readonly connected = this.kitchenSocketService.connected;

  protected readonly stations = signal<Station[]>([]);
  protected readonly steps = signal<StatusStep[]>([]);
  protected readonly orders = signal<KitchenOrder[]>([]);
  protected readonly typeFilter = signal<TypeFilter>('all');
  protected readonly selectedOrderId = signal<string | null>(null);
  protected readonly freshIds = signal<ReadonlySet<string>>(new Set());
  protected readonly loading = signal(true);
  protected readonly errorMessage = signal('');
  protected readonly now = signal(Date.now());

  private readonly cards = viewChildren(OrderCardComponent);
  private readonly refresh$ = new Subject<void>();
  /** Order ids already on the board — anything new arriving in the first
   * column after the initial load is an incoming order (sound + highlight). */
  private knownIds: Set<string> | null = null;
  /** Moves sent to the server but not confirmed yet: orderId -> the moved
   * ticket (null when the move clears it off the board). */
  private readonly pendingMoves = new Map<string, KitchenOrder | null>();
  /** New arrivals still waiting to be started ("Repeat" sound mode). */
  private readonly ringingIds = new Set<string>();

  protected readonly typeCounts = computed(() => {
    const counts: Record<TypeFilter, number> = { all: 0, dine_in: 0, takeaway: 0, delivery: 0 };
    for (const order of this.orders()) {
      counts.all++;
      counts[order.orderType]++;
    }
    return counts;
  });

  /** One column per non-terminal step; the terminal step is the action that clears a ticket. */
  protected readonly columns = computed<BoardColumn[]>(() => {
    const columnSteps = this.steps().filter((s) => !s.isTerminal);
    const firstKey = columnSteps[0]?.key;
    const filter = this.typeFilter();
    const visible = this.orders().filter((o) => filter === 'all' || o.orderType === filter);

    return columnSteps.map((step) => {
      const orders = visible.filter((o) =>
        step.key === firstKey ? !columnSteps.some((s) => s.key === o.stepKey) || o.stepKey === step.key : o.stepKey === step.key,
      );
      // New tickets: newest on top. Everything else: oldest in that column first.
      orders.sort((a, b) =>
        step.key === firstKey
          ? b.createdAt.localeCompare(a.createdAt)
          : a.stageSince.localeCompare(b.stageSince),
      );
      return { step, tone: columnTone(step.key), orders };
    });
  });

  /** Bottom-bar actions: every step after the first, with its shortcut. */
  protected readonly actions = computed(() =>
    this.steps()
      .slice(1)
      .map((step) => ({ step, tone: columnTone(step.key) })),
  );

  protected readonly selectedOrder = computed(() => {
    const id = this.selectedOrderId();
    return this.columns().flatMap((c) => c.orders).find((o) => o.orderId === id) ?? null;
  });

  protected readonly clock = computed(() => {
    const date = new Date(this.now());
    const locale = this.i18n.locale();
    return {
      time: new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit' }).format(date),
      date: new Intl.DateTimeFormat(locale, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }).format(date),
    };
  });

  ngOnInit(): void {
    const store = this.store();
    const station = this.station();
    if (!store || !station) {
      this.router.navigate(store ? ['/select-station'] : ['/select-store']);
      return;
    }

    this.refresh$
      .pipe(
        // A burst of socket events (one per station touched) becomes one fetch.
        debounceTime(150),
        switchMap(() => {
          const currentStore = this.store();
          if (!currentStore) return of(null);
          return this.kitchenDisplayService.getBoard(currentStore._id, this.station()?.id ?? null).pipe(
            catchError((err) => {
              this.errorMessage.set(err?.error?.message || 'Could not load orders.');
              this.loading.set(false);
              return of(null);
            }),
          );
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((board) => {
        if (!board) return;
        this.steps.set(board.steps);
        this.applyOrders(board.orders);
        this.loading.set(false);
        this.errorMessage.set('');
      });

    this.loadStations();
    this.refresh$.next();
    this.connectSocket();

    const clock = setInterval(() => this.now.set(Date.now()), 1000);
    this.destroyRef.onDestroy(() => clearInterval(clock));
    const ring = setInterval(() => this.ringIfWaiting(), RING_EVERY_MS);
    this.destroyRef.onDestroy(() => clearInterval(ring));

    this.kitchenSocketService.orderEvents$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.refresh$.next());

    this.destroyRef.onDestroy(() => this.kitchenSocketService.disconnect());
  }

  private loadStations(): void {
    const store = this.store();
    if (!store) return;
    this.stationService.getStations(store._id).subscribe({
      next: (stations) => this.stations.set(stations.filter((s) => s.active !== false)),
    });
  }

  private async connectSocket(): Promise<void> {
    const store = this.store();
    const station = this.station();
    if (!store || !station) return;
    try {
      const token = await this.deviceTokenService.getOrMintToken(store._id);
      this.kitchenSocketService.connect(store._id, station.id, token);
    } catch {
      this.errorMessage.set('Could not establish a live connection — orders will only refresh on reload.');
    }
  }

  private applyOrders(serverOrders: KitchenOrder[]): void {
    // Moves still in flight win over the snapshot until the server confirms.
    let orders = serverOrders;
    for (const [orderId, moved] of this.pendingMoves) {
      orders = moved
        ? orders.map((o) => (o.orderId === orderId ? moved : o))
        : orders.filter((o) => o.orderId !== orderId);
    }

    const firstKey = this.steps().find((s) => !s.isTerminal)?.key;
    const isFirstLoad = !this.knownIds;
    if (!isFirstLoad) {
      const arrived = orders.filter((o) => !this.knownIds!.has(o.orderId) && (o.stepKey ?? firstKey) === firstKey);
      if (arrived.length) {
        this.sound.playNewOrder();
        arrived.forEach((o) => this.ringingIds.add(o.orderId));
        this.announcer.announce(
          arrived.map((o) => this.i18n.t('announce.newOrder', { ref: `#${o.reference ?? ''}` })).join('. '),
        );
        this.markFresh(arrived.map((o) => o.orderId));
      }
    }
    this.knownIds = new Set(orders.map((o) => o.orderId));

    // Only animate when something actually changed place (new ticket, a
    // ticket moved on another screen) — not on every quiet re-poll.
    const layout = (list: KitchenOrder[]) => list.map((o) => `${o.orderId}:${o.stepKey}`).sort().join('|');
    if (isFirstLoad || layout(orders) === layout(this.orders())) {
      this.orders.set(orders);
    } else {
      this.animateBoard(() => this.orders.set(orders));
    }
  }

  /**
   * "Repeat" sound mode: keep ringing while an order that arrived on this
   * screen is still waiting in the first column. Starting it stops the ring.
   */
  private ringIfWaiting(): void {
    if (this.sound.repeat() !== 'repeat' || !this.ringingIds.size) return;
    const firstKey = this.columns()[0]?.step.key;
    for (const id of [...this.ringingIds]) {
      const order = this.orders().find((o) => o.orderId === id);
      if (!order || order.stepKey !== firstKey) this.ringingIds.delete(id);
    }
    if (this.ringingIds.size) this.sound.playNewOrder();
  }

  private markFresh(ids: string[]): void {
    this.freshIds.update((set) => new Set([...set, ...ids]));
    setTimeout(() => {
      this.freshIds.update((set) => new Set([...set].filter((id) => !ids.includes(id))));
    }, FRESH_FOR_MS);
  }

  // --- Actions -------------------------------------------------------------

  /** The ticket's own button: next step along its flow. */
  protected advance(order: KitchenOrder): void {
    if (order.nextAction) this.move(order, { toStep: order.nextAction.key });
  }

  /**
   * Bottom bar / shortcut key: move the selected ticket to `step`. With
   * nothing selected, take the oldest ticket from the column just before it.
   */
  protected moveSelectedTo(step: StatusStep): void {
    const order = this.selectedOrder() ?? this.defaultCandidateFor(step);
    if (!order) {
      this.announcer.announce(this.i18n.t('announce.nothingSelected'));
      return;
    }
    if (order.stepKey === step.key) return;
    this.move(order, { toStep: step.key });
  }

  /** A ticket in the first column has nowhere to be recalled to. */
  protected readonly canRecall = computed(() => {
    const order = this.selectedOrder();
    return !!order && order.stepKey !== this.columns()[0]?.step.key;
  });

  protected recallSelected(): void {
    const order = this.selectedOrder();
    if (!order || !this.canRecall()) {
      this.announcer.announce(this.i18n.t('announce.nothingSelected'));
      return;
    }
    this.move(order, { direction: 'back' });
  }

  protected canMoveTo(step: StatusStep): boolean {
    const selected = this.selectedOrder();
    return selected ? selected.stepKey !== step.key : !!this.defaultCandidateFor(step);
  }

  private defaultCandidateFor(step: StatusStep): KitchenOrder | null {
    const columns = this.columns();
    const target = this.steps().findIndex((s) => s.key === step.key);
    const source = columns.find((c) => c.step.key === this.steps()[target - 1]?.key);
    if (!source?.orders.length) return null;
    // The column's oldest ticket — for New (newest on top) that's the last one.
    return source.step.key === columns[0]?.step.key ? source.orders[source.orders.length - 1] : source.orders[0];
  }

  /**
   * Optimistic: the ticket moves on screen immediately (animated), and the
   * server is told in the background. A failed request puts the ticket back
   * where it was. Board snapshots that arrive while the request is in flight
   * keep showing the moved version (see applyOrders), so a refresh can't
   * briefly drag the ticket back to its old column.
   */
  private move(order: KitchenOrder, move: { direction?: 'next' | 'back'; toStep?: string }): void {
    if (this.pendingMoves.has(order.orderId)) return;

    const steps = this.steps();
    const from = steps.findIndex((s) => s.key === order.stepKey);
    const target = move.toStep
      ? steps.find((s) => s.key === move.toStep)
      : steps[move.direction === 'back' ? from - 1 : from + 1];
    if (!target || target.key === order.stepKey) return;

    const keepFocusOnBoard = this.focusIsOnBoard();
    const following = this.neighbourInColumn(order);
    const moved = target.isTerminal ? null : this.withStep(order, target);

    this.pendingMoves.set(order.orderId, moved);
    this.ringingIds.delete(order.orderId);
    this.animateBoard(() => {
      this.orders.update((list) =>
        moved ? list.map((o) => (o.orderId === order.orderId ? moved : o)) : list.filter((o) => o.orderId !== order.orderId),
      );
      // Stay in the column being worked: select the next ticket there.
      if (this.selectedOrderId() === order.orderId) {
        this.selectedOrderId.set(following?.orderId ?? null);
      }
    });
    if (keepFocusOnBoard && following && this.selectedOrderId() === following.orderId) {
      this.focusOrder(following.orderId);
    }
    this.announcer.announce(
      this.i18n.t('announce.moved', { ref: `#${order.reference ?? ''}`, status: this.i18n.t('status.' + target.key) }),
    );

    this.kitchenDisplayService.advanceOrder(order.orderId, this.station()?.id ?? null, move).subscribe({
      next: () => this.pendingMoves.delete(order.orderId),
      error: (err) => {
        this.pendingMoves.delete(order.orderId);
        this.animateBoard(() =>
          this.orders.update((list) => [...list.filter((o) => o.orderId !== order.orderId), order]),
        );
        this.errorMessage.set(err?.error?.message || 'Could not update that order — try again.');
      },
    });
  }

  /** The order as it will look once it reaches `step` — what the server will
   * send back next snapshot, worked out locally from this scope's steps. */
  private withStep(order: KitchenOrder, step: StatusStep): KitchenOrder {
    const steps = this.steps();
    const index = steps.findIndex((s) => s.key === step.key);
    const next = steps[index + 1];
    return {
      ...order,
      stepKey: step.key,
      stageSince: new Date().toISOString(),
      stage: index === 0 ? 'new' : 'in_progress',
      currentStepLabel: step.label,
      nextAction: next ? { key: next.key, label: next.label, isFinal: next.isTerminal, shortcut: next.shortcut } : null,
      items: order.items.map((item) => ({ ...item, kitchenStatus: step.key, isDone: false })),
    };
  }

  /**
   * Apply a board change inside a View Transition, so tickets glide from
   * their old column/position to the new one (each card has its own
   * view-transition-name). Falls back to an instant update where unsupported
   * or when the user prefers reduced motion.
   */
  private animateBoard(update: () => void): void {
    const start = (document as Document & { startViewTransition?: (cb: () => void) => unknown }).startViewTransition;
    if (!start || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      update();
      return;
    }
    start.call(document, () => {
      update();
      this.appRef.tick();
    });
  }

  private neighbourInColumn(order: KitchenOrder): KitchenOrder | null {
    const column = this.columns().find((c) => c.orders.some((o) => o.orderId === order.orderId));
    if (!column) return null;
    const index = column.orders.findIndex((o) => o.orderId === order.orderId);
    return column.orders[index + 1] ?? column.orders[index - 1] ?? null;
  }

  // --- Keyboard --------------------------------------------------------------

  protected onKeydown(event: KeyboardEvent): void {
    if (this.dialog.openDialogs.length) return;
    const target = event.target as HTMLElement | null;
    if (target?.closest('input, textarea, [role="combobox"], [role="listbox"], mat-option')) return;

    const shortcutStep = /^F([1-9]|1[0-2])$/.test(event.key)
      ? this.steps().find((s, i) => i > 0 && s.shortcut === event.key)
      : undefined;
    if (shortcutStep) {
      event.preventDefault();
      this.moveSelectedTo(shortcutStep);
      return;
    }

    if (event.key === 'Backspace') {
      event.preventDefault();
      this.recallSelected();
      return;
    }

    const card = target?.closest('app-order-card');
    if (!card) return;

    switch (event.key) {
      case 'Enter':
      case ' ': {
        event.preventDefault();
        const order = this.selectedOrder();
        if (order) this.advance(order);
        break;
      }
      case 'ArrowUp':
      case 'ArrowDown':
      case 'Home':
      case 'End':
        this.moveFocusVertically(event);
        break;
      case 'ArrowLeft':
      case 'ArrowRight':
        event.preventDefault();
        this.moveFocusAcross(event.key === 'ArrowRight' ? 1 : -1);
        break;
    }
  }

  /** Up/Down/Home/End within the focused ticket's column, via the CDK focus manager. */
  private moveFocusVertically(event: KeyboardEvent): void {
    const column = this.columns().find((c) => c.orders.some((o) => o.orderId === this.selectedOrderId()));
    if (!column) return;
    const cards = column.orders
      .map((o) => this.cards().find((c) => c.order().orderId === o.orderId))
      .filter((c): c is OrderCardComponent => !!c);

    const manager = new FocusKeyManager(cards).withVerticalOrientation().withWrap().withHomeAndEnd();
    manager.updateActiveItem(cards.findIndex((c) => c.order().orderId === this.selectedOrderId()));
    manager.onKeydown(event);
    manager.destroy();
  }

  /** Left/Right to the neighbouring non-empty column, keeping roughly the same row. */
  private moveFocusAcross(direction: 1 | -1): void {
    const columns = this.columns();
    const from = columns.findIndex((c) => c.orders.some((o) => o.orderId === this.selectedOrderId()));
    if (from < 0) return;
    const row = columns[from].orders.findIndex((o) => o.orderId === this.selectedOrderId());

    for (let i = from + direction; i >= 0 && i < columns.length; i += direction) {
      const orders = columns[i].orders;
      if (orders.length) {
        this.focusOrder(orders[Math.min(row, orders.length - 1)].orderId);
        return;
      }
    }
  }

  private focusOrder(orderId: string): void {
    // After the next render, so a ticket that just moved columns exists in the DOM.
    setTimeout(() => this.cards().find((c) => c.order().orderId === orderId)?.focus());
  }

  private focusIsOnBoard(): boolean {
    const active = document.activeElement;
    return !active || active === document.body || !!active.closest('app-order-card, .kds-actionbar');
  }

  // --- Toolbar ---------------------------------------------------------------

  protected switchStation(id: string): void {
    if (id === this.station()?.id) return;
    const name = id === ALL_STATIONS_ID ? 'All stations' : this.stations().find((s) => s._id === id)?.name || '';
    this.stationService.selectStation({ id, name });
    this.resetBoard();
    this.connectSocket();
  }

  protected openSettings(): void {
    this.dialog
      .open<SettingsDialogComponent, void, SettingsResult>(SettingsDialogComponent, {
        width: '520px',
        maxWidth: 'calc(100vw - 32px)',
        autoFocus: 'first-tabbable',
        restoreFocus: true,
      })
      .afterClosed()
      .subscribe((result) => {
        if (!result) return;
        if ('logout' in result) {
          this.logout();
          return;
        }
        const store = this.storeService.stores().find((s) => s._id === result.switchToStoreId);
        if (!store) return;
        this.kitchenSocketService.disconnect();
        this.storeService.selectStore(store);
        this.stationService.selectStation({ id: ALL_STATIONS_ID, name: 'All stations' });
        this.stations.set([]);
        this.loadStations();
        this.resetBoard();
        this.connectSocket();
      });
  }

  private resetBoard(): void {
    this.knownIds = null;
    this.pendingMoves.clear();
    this.ringingIds.clear();
    this.selectedOrderId.set(null);
    this.freshIds.set(new Set());
    this.loading.set(true);
    this.refresh$.next();
  }

  private logout(): void {
    this.kitchenSocketService.disconnect();
    this.authService.logout();
    this.storeService.clear();
    this.stationService.clear();
    this.router.navigate(['/login']);
  }
}
