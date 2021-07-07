import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/layout/dashboard/dashboard.component';

import { LoginComponent } from './component/login/login.component';
import { OrderListComponent } from './component/order/list/list.component';
import { ProviderListComponent } from './component/provider/list/provider-list.component';
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
        component: ProviderListComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'orders',
        component: OrderListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackendRoutingModule {}
