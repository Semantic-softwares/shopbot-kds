import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { SessionStorageService } from './session-storage.service';

/**
 * Mints (and caches) the long-lived device-scoped JWT used ONLY to
 * authenticate this kiosk's Socket.IO connection — REST calls keep using the
 * normal staff JWT from login. The deviceId + token are persisted in
 * localStorage so a kiosk that reboots/refreshes reconnects without
 * re-minting (backend issues a 365-day token per
 * POST /kitchen-display/device-token).
 */
@Injectable({ providedIn: 'root' })
export class DeviceTokenService {
  private http = inject(HttpClient);
  private sessionStorage = inject(SessionStorageService);
  private apiUrl = environment.apiUrl;

  /** Returns a device-scoped socket token for `storeId`, minting a new one
   * (against a stable, persisted deviceId) only if none is cached for that
   * store yet. */
  async getOrMintToken(storeId: string): Promise<string> {
    const cached = this.sessionStorage.getDeviceToken(storeId);
    if (cached) return cached;

    const deviceId = this.sessionStorage.getOrCreateDeviceId();
    const { token } = await firstValueFrom(
      this.http.post<{ token: string }>(`${this.apiUrl}/kitchen-display/device-token`, {
        storeId,
        deviceId,
      }),
    );
    this.sessionStorage.setDeviceToken(token, storeId);
    return token;
  }
}
