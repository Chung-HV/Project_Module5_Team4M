import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './backend/layout/dashboard/dashboard.component';
import { LoginComponent } from './backend/login/login.component';
import { ListComponent } from './backend/provider/list/list.component';
import { RequestingComponent } from './backend/provider/requesting/requesting.component';

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
