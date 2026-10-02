import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Store } from './store.service';

export interface Role {
  _id: string;
  name: string;
  [key: string]: unknown;
}

/** One row per (merchant, store) pair — mirrors backend membership.schema.ts.
 * `/memberships/mine` is scoped server-side to ACTIVE memberships only. */
export interface Membership {
  _id: string;
  merchant: string;
  store: Store | string;
  role?: Role | string;
  status: 'ACTIVE' | 'INVITED' | 'SUSPENDED';
  [key: string]: unknown;
}

@Injectable({ providedIn: 'root' })
export class MembershipsService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  /** Every store the current logged-in staff member has active access to —
   * no role filtering here: kitchen staff are rarely "admins", unlike
   * shopbot-printer which restricts to admin-only stores. */
  getMine(): Observable<Membership[]> {
    return this.http.get<Membership[]>(`${this.apiUrl}/memberships/mine`);
  }
}
