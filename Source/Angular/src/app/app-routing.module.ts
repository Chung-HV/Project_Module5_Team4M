import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './backend/layout/dashboard/dashboard.component';
import { RequestingComponent } from './backend/provider/requesting/requesting.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'frontend',
    pathMatch: 'full',
  },
  {
    path: 'frontend',
    loadChildren: () =>
      import('./frontend/frontend.module').then((m) => m.FrontendModule),
  },
 {
   path: 'admin/provider/requesting',
   component:RequestingComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
