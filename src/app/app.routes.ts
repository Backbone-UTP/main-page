import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'health-check',
    loadComponent: () =>
      import('./pages/health/health.component').then((m) => m.HealthComponent),
  },
  {
    path: 'events/software-freedom-day-2024',
    loadComponent: () =>
      import('./pages/events/sfd-2024/sfd-2024.component').then(
        (m) => m.SFD2024Component
      ),
  },
  {
    path: 'main',
    redirectTo: 'events/software-freedom-day-2024',
  },
  {
    path: '',
    redirectTo: 'events/software-freedom-day-2024',
    pathMatch: 'full',
  },
];
