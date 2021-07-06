import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FrontendHomeComponent } from './component/frontend-home/frontend-home.component';
import { LoginComponent } from './component/login/login.component';
import { OrderListComponent } from './component/order/order-list/order-list.component';

import { ProfileUserComponent } from './component/profile-user/profile-user.component';
import { ProviderDetailComponent } from './component/provider-detail/provider-detail.component';
import { ServiceListComponent } from './component/provider/service-list/service-list.component';

import { RegisterComponent } from './component/register/register.component';
import { OrderingComponent } from './component/user/ordering/ordering.component';

const routes: Routes = [

  {
    path: '',
    component: FrontendHomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'user/profile', component: ProfileUserComponent },
      { path: 'user/orders', component: OrderingComponent },
      { path: 'provider/orders', component: OrderListComponent },
      { path: 'provider/services', component: ServiceListComponent },
      { path: 'provider-detail/:id', component: ProviderDetailComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontendRoutingModule {}
