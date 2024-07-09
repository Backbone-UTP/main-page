import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HealthComponent } from './pages/health/health.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
    path: 'health-check',
    component: HealthComponent,
    loadChildren: () =>
      import('./pages/health/health.module').then((m) => m.HealthModule),
  },
  {
    path: 'main',
    component: MainComponent,
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainModule),
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
