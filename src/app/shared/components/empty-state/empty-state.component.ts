import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

/**
 * Centered "nothing here" block — reused wherever a list can legitimately be
 * empty (no stores, no stations, no active orders on the board) instead of
 * each page hand-rolling its own placeholder markup.
 */
@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-10 text-center dark:border-slate-800 dark:bg-slate-900">
      <mat-icon class="!h-10 !w-10 !text-4xl text-slate-400 dark:text-slate-600">{{ icon() }}</mat-icon>
      <p class="text-lg font-semibold text-slate-900 dark:text-white">{{ title() }}</p>
      @if (message()) {
        <p class="max-w-sm text-sm text-slate-500 dark:text-slate-400">{{ message() }}</p>
      }
    </div>
  `,
})
export class EmptyStateComponent {
  icon = input<string>('inbox');
  title = input.required<string>();
  message = input<string>('');
}
