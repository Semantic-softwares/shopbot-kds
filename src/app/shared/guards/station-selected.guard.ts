import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StationService } from '../../services/station.service';

/** Guards /board: a store was picked but no station (or a reload landed here
 * before the kiosk finished first-time setup) — send them to pick a station
 * (or "All stations") first. */
export const stationSelectedGuard: CanActivateFn = () => {
  const router = inject(Router);
  const stationService = inject(StationService);

  if (stationService.currentStation()) return true;

  router.navigate(['/select-station']);
  return false;
};
