import { ChangeDetectionStrategy, Component, ElementRef, computed, inject, input, output } from '@angular/core';
import { FocusableOption } from '@angular/cdk/a11y';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { KitchenOrder, KitchenOrderItem } from '../../services/kitchen-display.service';
import { I18nService } from '../../services/i18n.service';
import { ColumnTone } from '../../shared/utils/kitchen-display.util';

const TYPE_ICONS: Record<KitchenOrder['orderType'], string> = {
  dine_in: 'restaurant',
  takeaway: 'shopping_bag',
  delivery: 'delivery_dining',
};

/**
 * One ticket. The card itself is the focus/Tab stop (its button is not, so
 * Tab moves ticket to ticket); the board's FocusKeyManagers drive arrow-key
 * movement through `focus()`, and Enter on a focused card advances it.
 */
@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './order-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block rounded-xl outline-none',
    role: 'listitem',
    tabindex: '0',
    '[attr.aria-label]': 'ariaLabel()',
    '[attr.aria-current]': 'selected() ? "true" : null',
    '(focus)': 'selectRequest.emit()',
    '(click)': 'selectRequest.emit()',
  },
})
export class OrderCardComponent implements FocusableOption {
  private host = inject<ElementRef<HTMLElement>>(ElementRef);
  protected i18n = inject(I18nService);

  order = input.required<KitchenOrder>();
  tone = input.required<ColumnTone>();
  /** Ticked once a second by the board so every timer moves together. */
  now = input.required<number>();
  selected = input(false);
  /** Just arrived over the socket — briefly highlighted. */
  fresh = input(false);
  busy = input(false);
  showStations = input(false);

  advance = output<void>();
  selectRequest = output<void>();

  protected readonly typeIcon = computed(() => TYPE_ICONS[this.order().orderType] ?? 'restaurant');

  protected readonly subtitle = computed(() => {
    const order = this.order();
    if (order.table) return `${this.i18n.t('board.table')} ${order.table.name}`;
    return order.person?.name || this.i18n.t('board.walkIn');
  });

  protected readonly timer = computed(() => {
    const seconds = Math.max(0, Math.floor((this.now() - new Date(this.order().stageSince).getTime()) / 1000));
    const h = Math.floor(seconds / 3600);
    const mm = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const ss = String(seconds % 60).padStart(2, '0');
    return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
  });

  protected readonly ariaLabel = computed(() => {
    const order = this.order();
    const items = order.items.map((i) => `${i.quantity} ${i.name}`).join(', ');
    return `#${order.reference ?? ''}, ${this.i18n.t('type.' + order.orderType)}, ${this.subtitle()}, ${this.timer()}. ${items}`;
  });

  focus(): void {
    this.host.nativeElement.focus();
  }

  protected optionsSummary(item: KitchenOrderItem): string {
    return item.options?.map((o) => o.optionItemName || o.name).join(', ') ?? '';
  }
}
