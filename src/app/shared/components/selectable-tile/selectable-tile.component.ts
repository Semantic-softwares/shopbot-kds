import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/**
 * Large tappable card used by the store-select and station-select grids — a
 * big touch target with an icon, a title, an optional subtitle, and a
 * trailing spinner while the tap is being actioned (e.g. minting the device
 * token). Built on `mat-card` so both selection screens share one Material
 * surface instead of duplicating the tile markup.
 */
@Component({
  selector: 'app-selectable-tile',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatProgressSpinnerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card
      appearance="outlined"
      class="!cursor-pointer !border-slate-200 !bg-white transition-colors hover:!border-orange-500 hover:!bg-slate-50 dark:!border-slate-800 dark:!bg-slate-900 dark:hover:!bg-slate-800"
      [class.!opacity-50]="disabled()"
      [class.!pointer-events-none]="disabled()"
      (click)="activate.emit()"
    >
      <div class="flex items-center gap-4 p-2">
        <div
          class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl"
          [style.background-color]="iconBg()"
        >
          <mat-icon class="!h-8 !w-8 !text-3xl" [style.color]="iconColor()">{{ icon() }}</mat-icon>
        </div>
        <div class="min-w-0 flex-1">
          <p class="truncate text-lg font-semibold text-slate-900 dark:text-white">{{ title() }}</p>
          @if (subtitle()) {
            <p class="truncate text-sm capitalize text-slate-500 dark:text-slate-400">{{ subtitle() }}</p>
          }
        </div>
        @if (busy()) {
          <mat-spinner diameter="24" />
        }
      </div>
    </mat-card>
  `,
})
export class SelectableTileComponent {
  title = input.required<string>();
  subtitle = input<string>('');
  icon = input<string>('storefront');
  iconColor = input<string>('#f97316');
  busy = input<boolean>(false);
  disabled = input<boolean>(false);

  activate = output<void>();

  protected iconBg = () => `${this.iconColor()}1a`;
}
