import { Injectable } from '@angular/core';

/**
 * Thin localStorage wrapper — centralizes every key this kiosk app persists
 * so a reboot/refresh can resume straight back to the board (login, store,
 * station and the device-scoped socket credentials) without re-prompting
 * staff. Mirrors shopbot-printer's SessionStorageService.
 */
@Injectable({ providedIn: 'root' })
export class SessionStorageService {
  private readonly CURRENT_USER_KEY = 'kds_current_user';
  private readonly AUTH_TOKEN_KEY = 'kds_auth_token';
  private readonly STORE_KEY = 'kds_store';
  private readonly STORES_KEY = 'kds_stores';
  private readonly STATION_KEY = 'kds_station';
  private readonly DEVICE_ID_KEY = 'kds_device_id';
  private readonly DEVICE_TOKEN_KEY = 'kds_device_token';
  /** storeId the persisted device token was minted for — a device token is
   * only valid for the store it was issued against, so switching stores must
   * invalidate it and force a re-mint. */
  private readonly DEVICE_TOKEN_STORE_KEY = 'kds_device_token_store';

  // --- User ---
  setCurrentUser(user: unknown): void {
    localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(user));
  }

  getCurrentUser<T = unknown>(): T | null {
    return this.readJson<T>(this.CURRENT_USER_KEY);
  }

  removeCurrentUser(): void {
    localStorage.removeItem(this.CURRENT_USER_KEY);
  }

  // --- Auth token (staff JWT — used for every REST call) ---
  setAuthToken(token: string): void {
    localStorage.setItem(this.AUTH_TOKEN_KEY, token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.AUTH_TOKEN_KEY);
  }

  removeAuthToken(): void {
    localStorage.removeItem(this.AUTH_TOKEN_KEY);
  }

  // --- Selected store ---
  setStore(store: unknown): void {
    localStorage.setItem(this.STORE_KEY, JSON.stringify(store));
  }

  getStore<T = unknown>(): T | null {
    return this.readJson<T>(this.STORE_KEY);
  }

  removeStore(): void {
    localStorage.removeItem(this.STORE_KEY);
  }

  // --- Every store this staff member can access ---
  setStores(stores: unknown[]): void {
    localStorage.setItem(this.STORES_KEY, JSON.stringify(stores));
  }

  getStores<T = unknown>(): T[] | null {
    return this.readJson<T[]>(this.STORES_KEY);
  }

  removeStores(): void {
    localStorage.removeItem(this.STORES_KEY);
  }

  // --- Selected station (id, or 'all') ---
  setStation(station: unknown): void {
    localStorage.setItem(this.STATION_KEY, JSON.stringify(station));
  }

  getStation<T = unknown>(): T | null {
    return this.readJson<T>(this.STATION_KEY);
  }

  removeStation(): void {
    localStorage.removeItem(this.STATION_KEY);
  }

  // --- Device identity (persists across logins so a kiosk reconnects as the
  // same device instead of minting a fresh token every time it reloads) ---
  getOrCreateDeviceId(): string {
    let id = localStorage.getItem(this.DEVICE_ID_KEY);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(this.DEVICE_ID_KEY, id);
    }
    return id;
  }

  setDeviceToken(token: string, storeId: string): void {
    localStorage.setItem(this.DEVICE_TOKEN_KEY, token);
    localStorage.setItem(this.DEVICE_TOKEN_STORE_KEY, storeId);
  }

  /** Returns the persisted device token only if it was minted for `storeId`. */
  getDeviceToken(storeId: string): string | null {
    const mintedFor = localStorage.getItem(this.DEVICE_TOKEN_STORE_KEY);
    if (mintedFor !== storeId) return null;
    return localStorage.getItem(this.DEVICE_TOKEN_KEY);
  }

  removeDeviceToken(): void {
    localStorage.removeItem(this.DEVICE_TOKEN_KEY);
    localStorage.removeItem(this.DEVICE_TOKEN_STORE_KEY);
  }

  clearAll(): void {
    this.removeCurrentUser();
    this.removeAuthToken();
    this.removeStore();
    this.removeStores();
    this.removeStation();
    this.removeDeviceToken();
  }

  private readJson<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    if (!data || data === 'undefined' || data === 'null') return null;
    try {
      return JSON.parse(data) as T;
    } catch {
      return null;
    }
  }
}
