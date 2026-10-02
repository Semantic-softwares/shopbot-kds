import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../services/auth.service';
import { StoreService, Store } from '../services/store.service';
import { StationService } from '../services/station.service';
import { MembershipsService } from '../services/memberships.service';
import { KioskHeaderComponent } from '../shared/components/kiosk-header/kiosk-header.component';
import { SelectableTileComponent } from '../shared/components/selectable-tile/selectable-tile.component';
import { EmptyStateComponent } from '../shared/components/empty-state/empty-state.component';
import { LoadingSpinnerComponent } from '../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-select-store',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    KioskHeaderComponent,
    SelectableTileComponent,
    EmptyStateComponent,
    LoadingSpinnerComponent,
  ],
  templateUrl: './select-store.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectStoreComponent {
  private authService = inject(AuthService);
  private storeService = inject(StoreService);
  private stationService = inject(StationService);
  private membershipsService = inject(MembershipsService);
  private router = inject(Router);

  protected readonly stores = this.storeService.stores;
  protected readonly loading = signal(false);
  protected readonly errorMessage = signal('');

  constructor() {
    this.refreshStores();
  }

  // Always re-pull from the server: the cached list can be empty or stale
  // (new store invites, a cleared localStorage, a reload mid-setup).
  protected refreshStores(): void {
    this.loading.set(this.stores().length === 0);
    this.errorMessage.set('');
    this.membershipsService.getMine().subscribe({
      next: (memberships) => {
        const stores = memberships
          .map((m) => m.store)
          .filter((store): store is Store => typeof store === 'object' && store !== null);
        this.storeService.saveStoresLocally(stores);
        this.loading.set(false);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message || 'Could not load your stores.');
        this.loading.set(false);
      },
    });
  }

  protected selectStore(store: Store): void {
    this.storeService.selectStore(store);
    this.stationService.clear();
    this.router.navigate(['/select-station']);
  }

  protected logout(): void {
    this.authService.logout();
    this.storeService.clear();
    this.stationService.clear();
    this.router.navigate(['/login']);
  }
}
