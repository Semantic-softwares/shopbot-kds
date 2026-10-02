import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'kds_theme';

/**
 * Drives both Angular Material's theme (via the `color-scheme` CSS property
 * — see styles.scss) and Tailwind's `dark:` variant (see tailwind.css's
 * `@custom-variant`) off one `data-theme` attribute on <html>. Defaults to
 * the OS/browser preference (`prefers-color-scheme`) the first time the app
 * is opened, then remembers whatever the kitchen staff picks via the toggle
 * — important on a wall-mounted kiosk where screen glare/lighting varies.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly _mode = signal<ThemeMode>(this.resolveInitialMode());
  readonly mode = this._mode.asReadonly();

  constructor() {
    this.apply(this._mode());
  }

  toggle(): void {
    this.set(this._mode() === 'dark' ? 'light' : 'dark');
  }

  set(mode: ThemeMode): void {
    this._mode.set(mode);
    localStorage.setItem(STORAGE_KEY, mode);
    this.apply(mode);
  }

  private resolveInitialMode(): ThemeMode {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private apply(mode: ThemeMode): void {
    document.documentElement.setAttribute('data-theme', mode);
  }
}
