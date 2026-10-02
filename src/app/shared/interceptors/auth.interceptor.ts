import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SessionStorageService } from '../../services/session-storage.service';

/** Attaches the staff JWT to every outgoing REST call. The device-scoped
 * token minted for the socket connection is never used here. */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const sessionStorage = inject(SessionStorageService);
  const token = sessionStorage.getAuthToken();

  if (token) {
    return next(req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) }));
  }

  return next(req);
};
