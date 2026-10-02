import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Small colored pill used to label a status or category — a station's type
 * on the station-select screen, a line item's current kitchenStatus on the
 * board. Colors come from backend-configured hex values (per-station
 * `statusFlow[].color`), which don't map onto Angular Material's fixed
 * primary/accent/warn palette, so this renders as a lightweight pill rather
 * than wrapping `mat-chip` — but keeps Material's type scale (via inherited
 * `font` from the Material typography tokens) for visual consistency.
 */
@Component({
  selector: 'app-status-chip',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      class="inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold capitalize"
      [style.background-color]="bg()"
      [style.color]="color()"
    >
      {{ label() }}
    </span>
  `,
})
export class StatusChipComponent {
  label = input.required<string>();
  color = input<string>('#f97316');

  protected bg = computed(() => `${this.color()}22`);
}
