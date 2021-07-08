import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FrontendHomeComponent } from './component/frontend-home/frontend-home.component';
import { LoginComponent } from './component/login/login.component';
import { ProviderOrdersComponent } from './component/order/provider-orders/provider-orders.component';

import { ProfileUserComponent } from './component/profile-user/profile-user.component';
import { ProviderDetailComponent } from './component/provider/provider-detail/provider-detail.component';
import { ServiceListComponent } from './component/provider/service-list/service-list.component';

import { RegisterComponent } from './component/register/register.component';
import { CustomerOrdersComponent } from './component/order/customer-order/customer-orders.component';
import { CreateAlbumComponent } from './component/user-album/create-album/create-album.component';

const routes: Routes = [

  {
    path: '',
    component: FrontendHomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'user/profile', component: ProfileUserComponent },
      { path: 'user/album', component: CreateAlbumComponent },
      { path: 'user/orders', component: CustomerOrdersComponent },
      { path: 'provider/orders', component: ProviderOrdersComponent },
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
