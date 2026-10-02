import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { catchError, of, switchMap, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { StoreService, Store } from '../services/store.service';
import { MembershipsService } from '../services/memberships.service';
import { LoadingSpinnerComponent } from '../shared/components/loading-spinner/loading-spinner.component';
import { ThemeToggleComponent } from '../shared/components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    LoadingSpinnerComponent,
    ThemeToggleComponent,
  ],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private storeService = inject(StoreService);
  private membershipsService = inject(MembershipsService);
  private router = inject(Router);

  hide = signal(true);
  loading = signal(false);
  errorMessage = signal('');

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  togglePasswordVisibility(event: MouseEvent): void {
    event.stopPropagation();
    this.hide.update((v) => !v);
  }

  onSubmit(): void {
    if (this.form.invalid || this.loading()) return;

    this.loading.set(true);
    this.errorMessage.set('');
    const { email, password } = this.form.value;

    this.authService
      .login(email!, password!)
      .pipe(
        switchMap(() =>
          this.membershipsService.getMine().pipe(
            switchMap((memberships) => {
              const stores = memberships
                .map((m) => m.store)
                .filter((store): store is Store => typeof store === 'object' && store !== null);

              if (stores.length === 0) {
                return throwError(() => new Error('You do not have access to any store.'));
              }
              return of(stores);
            }),
          ),
        ),
        catchError((error) => {
          this.authService.logout();
          this.errorMessage.set(
            error?.error?.message || error?.message || 'Login failed. Please try again.',
          );
          this.loading.set(false);
          return of(null);
        }),
      )
      .subscribe((stores) => {
        if (!stores) return;
        this.loading.set(false);
        this.storeService.saveStoresLocally(stores);
        this.router.navigate(['/select-store']);
      });
  }
}
