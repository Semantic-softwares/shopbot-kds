import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      class="inline-block animate-spin rounded-full border-2 border-current border-t-transparent"
      [class]="sizeClass()"
      [style.color]="color()"
    ></span>
  `,
})
export class LoadingSpinnerComponent {
  size = input<'sm' | 'md' | 'lg'>('md');
  color = input<string>('currentColor');

  protected sizeClass(): string {
    switch (this.size()) {
      case 'sm':
        return 'w-4 h-4';
      case 'lg':
        return 'w-10 h-10';
      default:
        return 'w-6 h-6';
    }
  }
}
