import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthComponent } from './pages/health/health.component';
import { SFD2024Component } from './pages/events/sfd-2024/sfd-2024.component';
import { SFD2025Component } from './pages/events/sfd-2025/sfd-2025.component';

const routes: Routes = [
  {
    path: 'health-check',
    component: HealthComponent,
    loadChildren: () =>
      import('./pages/health/health.module').then((m) => m.HealthModule),
  },
  {
    path: 'events/software-freedom-day-2024',
    component: SFD2024Component,
    loadChildren: () =>
      import('./pages/events/sfd-2024/sfd-2024.module').then(
        (m) => m.SFD2024Module
      ),
  },
  {
    path: 'events/software-freedom-day-2025',
    component: SFD2025Component,
    loadChildren: () =>
      import('./pages/events/sfd-2025/sfd-2025.module').then(
        (m) => m.SFD2025Module
      ),
  },
  {
    path: 'main',
    redirectTo: 'events/software-freedom-day-2025',
  },
  {
    path: '',
    redirectTo: 'events/software-freedom-day-2025',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
