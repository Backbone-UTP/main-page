import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthComponent } from './pages/health/health.component';
import { SFD2024Component } from './pages/events/sfd-2024/sfd-2024.component';

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
    path: 'main',
    redirectTo: 'events/software-freedom-day-2024',
  },
  {
    path: '',
    redirectTo: 'events/software-freedom-day-2024',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
