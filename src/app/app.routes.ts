import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { storeSelectedGuard } from './shared/guards/store-selected.guard';
import { stationSelectedGuard } from './shared/guards/station-selected.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'board',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'select-store',
    canActivate: [authGuard],
    loadComponent: () => import('./select-store/select-store.component').then((m) => m.SelectStoreComponent),
  },
  {
    path: 'select-station',
    canActivate: [authGuard, storeSelectedGuard],
    loadComponent: () =>
      import('./select-station/select-station.component').then((m) => m.SelectStationComponent),
  },
  {
    path: 'board',
    canActivate: [authGuard, storeSelectedGuard, stationSelectedGuard],
    loadComponent: () => import('./board/board.component').then((m) => m.BoardComponent),
  },
  {
    path: '**',
    redirectTo: 'board',
  },
];
