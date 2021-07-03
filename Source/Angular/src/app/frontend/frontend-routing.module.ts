import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FrontendHomeComponent } from './component/frontend-home/frontend-home.component';
import { LoginComponent } from './component/login/login.component';
import { OrderHistoryComponent } from './component/order-history/order-history.component';

import { ProfileUserComponent } from './component/profile-user/profile-user.component';
import { ProviderDetailComponent } from './component/provider-detail/provider-detail.component';

import { RegisterComponent } from './component/register/register.component';
import { ServiceProviderComponent } from './component/service-provider/service-provider.component';

const routes: Routes = [
  {
    path: '',
    component: FrontendHomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'login', component: LoginComponent },

      { path: 'register', component: RegisterComponent },
      { path: 'user/profile', component: ProfileUserComponent },
      { path: 'user/profile/order-history', component: OrderHistoryComponent },
      { path: 'provider/:id/service', component: ServiceProviderComponent },
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
