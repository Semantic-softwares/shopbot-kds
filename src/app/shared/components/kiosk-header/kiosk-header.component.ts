import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

/**
 * The top bar repeated across every post-login screen (store select, station
 * select, board): a title/subtitle on the left and page-specific action
 * buttons (Change store, Change station, Log out, connection status, ...) on
 * the right via content projection, so each page supplies its own
 * `matButton`/`matIconButton` actions without re-implementing the bar. The
 * light/dark toggle always appears first in that action row so it's in the
 * same place on every screen.
 */
@Component({
  selector: 'app-kiosk-header',
  standalone: true,
  imports: [ThemeToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mb-8 flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-slate-900 dark:text-white">{{ title() }}</h1>
        @if (subtitle()) {
          <p class="mt-1 text-slate-500 dark:text-slate-400">{{ subtitle() }}</p>
        }
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <ng-content />
        <app-theme-toggle />
      </div>
    </div>
  `,
})
export class KioskHeaderComponent {
  title = input.required<string>();
  subtitle = input<string>('');
}
