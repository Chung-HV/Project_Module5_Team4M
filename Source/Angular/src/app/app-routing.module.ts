import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './backend/component/layout/dashboard/dashboard.component';
import { LoginComponent } from './backend/component/login/login.component';
import { ProviderListComponent } from './backend/component/provider/list/provider-list.component';
import { RequestingComponent } from './backend/component/provider/requesting/requesting.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'frontend',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    redirectTo: 'admin',
    pathMatch: 'full',
  },

  {
    path: 'frontend',
    loadChildren: () =>
      import('./frontend/frontend.module').then((m) => m.FrontendModule),
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./backend/backend.module').then((m) => m.BackendModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
