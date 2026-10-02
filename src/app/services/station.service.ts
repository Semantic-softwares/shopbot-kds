import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { SessionStorageService } from './session-storage.service';

export interface StatusStep {
  key: string;
  label: string;
  order: number;
  isTerminal: boolean;
  /** F1–F12 key that moves the selected ticket to this step. */
  shortcut?: string;
}

export interface Station {
  _id: string;
  name: string;
  type: 'preparation' | 'bar' | 'pastry' | 'grill' | 'other' | string;
  color?: string;
  icon?: string;
  active?: boolean;
  statusFlow?: StatusStep[];
  printers?: unknown[];
  [key: string]: unknown;
}

/** Synthetic option shown on the station-select screen alongside the real
 * stations returned by the backend — not a real Station document. */
export const ALL_STATIONS_ID = 'all';

export interface StationSelection {
  id: string; // real station _id, or ALL_STATIONS_ID
  name: string;
}

@Injectable({ providedIn: 'root' })
export class StationService {
  private http = inject(HttpClient);
  private sessionStorage = inject(SessionStorageService);
  private apiUrl = environment.apiUrl;

  private _currentStation = signal<StationSelection | null>(
    this.sessionStorage.getStation<StationSelection>(),
  );
  readonly currentStation = this._currentStation.asReadonly();

  getStations(storeId: string): Observable<Station[]> {
    return this.http
      .get<Station[]>(`${this.apiUrl}/stations/store/${storeId}/stations`)
      .pipe(map((stations) => stations ?? []));
  }

  selectStation(station: StationSelection): void {
    this.sessionStorage.setStation(station);
    this._currentStation.set(station);
  }

  clear(): void {
    this.sessionStorage.removeStation();
    this._currentStation.set(null);
  }
}
