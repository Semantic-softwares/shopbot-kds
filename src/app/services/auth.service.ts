import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { SessionStorageService } from './session-storage.service';

export interface AuthUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  [key: string]: unknown;
}

/**
 * Staff/merchant login — same endpoint shopbot-printer's renderer calls
 * (`POST /auth/login?user=merchant`). Returns a JWT used as a Bearer token
 * for every REST call the board makes; the separate device-scoped token used
 * for the socket connection is minted later, once a store+station are picked
 * (see DeviceTokenService).
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private sessionStorage = inject(SessionStorageService);
  private apiUrl = environment.apiUrl;

  private _currentUser = signal<AuthUser | null>(this.sessionStorage.getCurrentUser<AuthUser>());
  readonly currentUser = this._currentUser.asReadonly();

  private _isLoggedIn = signal<boolean>(
    !!this.sessionStorage.getCurrentUser() && !!this.sessionStorage.getAuthToken(),
  );
  readonly isLoggedIn = this._isLoggedIn.asReadonly();

  login(email: string, password: string): Observable<AuthUser> {
    return this.http
      .post<{ access_token: string; user: AuthUser; msg?: string; status?: number }>(
        `${this.apiUrl}/auth/login?user=merchant`,
        { email, password },
      )
      .pipe(
        map((response) => {
          // The backend replies with HTTP 200/201 even for invalid
          // credentials, embedding the real error in the JSON body
          // ({msg, status: 401}) instead of a 4xx — detect that explicitly.
          if (!response?.access_token || !response?.user) {
            throw new Error(response?.msg || 'Invalid email or password.');
          }
          this.sessionStorage.setCurrentUser(response.user);
          this.sessionStorage.setAuthToken(response.access_token);
          this._currentUser.set(response.user);
          this._isLoggedIn.set(true);
          return response.user;
        }),
      );
  }

  logout(): void {
    this.sessionStorage.clearAll();
    this._currentUser.set(null);
    this._isLoggedIn.set(false);
  }
}
