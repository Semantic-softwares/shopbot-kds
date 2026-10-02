import { Injectable, inject, signal } from '@angular/core';
import { SessionStorageService } from './session-storage.service';

export interface Store {
  _id: string;
  name: string;
  storeNumber?: string;
  address?: string;
  logo?: string;
  [key: string]: unknown;
}

@Injectable({ providedIn: 'root' })
export class StoreService {
  private sessionStorage = inject(SessionStorageService);

  /** The store this board is currently scoped to. */
  private _currentStore = signal<Store | null>(this.sessionStorage.getStore<Store>());
  readonly currentStore = this._currentStore.asReadonly();

  /** Every store this staff member can access — the store-select screen's
   * data source. */
  private _stores = signal<Store[]>(this.sessionStorage.getStores<Store>() ?? []);
  readonly stores = this._stores.asReadonly();

  saveStoresLocally(stores: Store[]): void {
    this.sessionStorage.setStores(stores);
    this._stores.set(stores);
  }

  selectStore(store: Store): void {
    this.sessionStorage.setStore(store);
    this._currentStore.set(store);
  }

  /** Forget which store is picked but keep the list, so "Change store" lands
   * on a populated picker instead of an empty one. */
  clearSelection(): void {
    this.sessionStorage.removeStore();
    this._currentStore.set(null);
  }

  clear(): void {
    this.sessionStorage.removeStore();
    this.sessionStorage.removeStores();
    this.sessionStorage.removeStation();
    this._currentStore.set(null);
    this._stores.set([]);
  }
}
