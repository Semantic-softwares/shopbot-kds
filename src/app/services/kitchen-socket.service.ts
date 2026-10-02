import { Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../environments/environment';
import { ALL_STATIONS_ID } from './station.service';

/**
 * Socket.IO connection to the backend's default (root) namespace — the same
 * gateway shopbot-printer's Electron agent connects to for push print jobs
 * (see shopbot-printer/electron/socket-service.js), not a dedicated
 * "/kitchen-display" namespace. Authenticates with the device-scoped token
 * minted by DeviceTokenService, joins the store room (and the station room,
 * if one specific station is selected), then just signals callers to
 * re-fetch the REST snapshot whenever a `kitchen:*` event arrives — this
 * service never tries to merge the lightweight socket payloads itself.
 *
 * Reconnect/backoff mirrors socket-service.js exactly: built-in Socket.IO
 * reconnection (handles both the initial connect and every subsequent
 * reconnect through the same 'connect' handler), reconnectionDelay 2s,
 * reconnectionDelayMax 30s, and a forced reconnect on wake — the browser
 * equivalent of Electron's `powerMonitor.resume` is the page becoming
 * visible again after being backgrounded/the device sleeping, handled via
 * `visibilitychange`.
 */
@Injectable({ providedIn: 'root' })
export class KitchenSocketService {
  private socket: Socket | null = null;
  private storeId: string | null = null;
  private stationId: string | null = null;

  /** Fires once per `kitchen:order:new` / `kitchen:item:statusUpdated` event
   * — callers re-fetch the REST snapshot in response, they don't inspect the
   * payload. */
  readonly orderEvents$ = new Subject<void>();

  readonly connected = signal(false);

  private visibilityHandler = () => {
    if (document.visibilityState === 'visible' && this.socket && !this.socket.connected) {
      this.socket.connect();
    }
  };

  connect(storeId: string, stationId: string, deviceToken: string): void {
    if (this.socket) {
      // Already connected/connecting for this exact store+station — no-op,
      // same guard socket-service.js uses.
      if (this.storeId === storeId && this.stationId === stationId) return;
      this.disconnect();
    }

    this.storeId = storeId;
    this.stationId = stationId;

    this.socket = io(environment.apiUrl, {
      auth: { token: deviceToken },
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionDelay: 2000,
      reconnectionDelayMax: 30000,
    });

    // Fires on the initial connection AND every reconnect — there is no
    // separate "reconnected" case, rejoining the rooms here covers both.
    this.socket.on('connect', () => {
      this.connected.set(true);
      this.socket!.emit('joinStore', this.storeId);
      if (this.stationId && this.stationId !== ALL_STATIONS_ID) {
        this.socket!.emit('joinStation', this.stationId);
      }
      // Catch-up: pick up anything that changed while disconnected.
      this.orderEvents$.next();
    });

    this.socket.on('disconnect', () => {
      this.connected.set(false);
    });

    this.socket.on('connect_error', () => {
      this.connected.set(false);
    });

    this.socket.on('kitchen:order:new', () => this.orderEvents$.next());
    this.socket.on('kitchen:item:statusUpdated', () => this.orderEvents$.next());

    document.addEventListener('visibilitychange', this.visibilityHandler);
  }

  disconnect(): void {
    document.removeEventListener('visibilitychange', this.visibilityHandler);
    if (this.socket) {
      this.socket.removeAllListeners();
      this.socket.disconnect();
      this.socket = null;
    }
    this.storeId = null;
    this.stationId = null;
    this.connected.set(false);
  }
}
