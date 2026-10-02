import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
})
export class App {
  // Injected (not just imported) so the light/dark `data-theme` attribute is
  // applied to <html> at bootstrap, before the first route renders —
  // ThemeService is otherwise only instantiated lazily wherever a
  // ThemeToggleComponent first mounts.
  private theme = inject(ThemeService);
}
