import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StoreService } from '../../services/store.service';

/** Guards /select-station and /board: a reload before a store was ever
 * picked has a token but no store context, so send them back to pick one. */
export const storeSelectedGuard: CanActivateFn = () => {
  const router = inject(Router);
  const storeService = inject(StoreService);

  if (storeService.currentStore()) return true;

  router.navigate(['/select-store']);
  return false;
};
