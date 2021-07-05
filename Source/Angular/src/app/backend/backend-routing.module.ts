import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/layout/dashboard/dashboard.component';

import { LoginComponent } from './component/login/login.component';
import { ListComponent } from './component/provider/list/list.component';
import { RequestingComponent } from './component/provider/requesting/requesting.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'provider/requesting',
        component: RequestingComponent,
      },
      {
        path: 'provider',
        component: ListComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackendRoutingModule {}
