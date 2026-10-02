import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StationService, Station, ALL_STATIONS_ID } from '../services/station.service';
import { StoreService } from '../services/store.service';
import { DeviceTokenService } from '../services/device-token.service';
import { AuthService } from '../services/auth.service';
import { LoadingSpinnerComponent } from '../shared/components/loading-spinner/loading-spinner.component';
import { KioskHeaderComponent } from '../shared/components/kiosk-header/kiosk-header.component';
import { SelectableTileComponent } from '../shared/components/selectable-tile/selectable-tile.component';
import { EmptyStateComponent } from '../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-select-station',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    LoadingSpinnerComponent,
    KioskHeaderComponent,
    SelectableTileComponent,
    EmptyStateComponent,
  ],
  templateUrl: './select-station.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectStationComponent {
  private stationService = inject(StationService);
  private storeService = inject(StoreService);
  private deviceTokenService = inject(DeviceTokenService);
  private authService = inject(AuthService);
  private router = inject(Router);

  protected readonly ALL_STATIONS_ID = ALL_STATIONS_ID;
  protected readonly store = this.storeService.currentStore;

  protected readonly loading = signal(true);
  protected readonly connecting = signal<string | null>(null);
  protected readonly errorMessage = signal('');
  protected readonly stations = signal<Station[]>([]);

  constructor() {
    this.loadStations();
  }

  private loadStations(): void {
    const store = this.store();
    if (!store) {
      this.router.navigate(['/select-store']);
      return;
    }

    this.loading.set(true);
    this.errorMessage.set('');
    this.stationService.getStations(store._id).subscribe({
      next: (stations) => {
        this.stations.set(stations.filter((s) => s.active !== false));
        this.loading.set(false);
      },
      error: (err) => {
        this.errorMessage.set(err?.error?.message || 'Could not load stations. Pull to retry.');
        this.loading.set(false);
      },
    });
  }

  protected async selectStation(id: string, name: string): Promise<void> {
    if (this.connecting()) return;
    const store = this.store();
    if (!store) return;

    this.connecting.set(id);
    this.errorMessage.set('');
    try {
      await this.deviceTokenService.getOrMintToken(store._id);
      this.stationService.selectStation({ id, name });
      this.router.navigate(['/board']);
    } catch (err: any) {
      this.errorMessage.set(err?.error?.message || 'Could not connect this device. Please try again.');
    } finally {
      this.connecting.set(null);
    }
  }

  protected changeStore(): void {
    this.storeService.clearSelection();
    this.stationService.clear();
    this.router.navigate(['/select-store']);
  }

  protected logout(): void {
    this.authService.logout();
    this.storeService.clear();
    this.stationService.clear();
    this.router.navigate(['/login']);
  }
}
