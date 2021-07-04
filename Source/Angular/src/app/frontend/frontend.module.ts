import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from './frontend-routing.module';

import { FrontendHeaderComponent } from './layouts/frontend-header/frontend-header.component';
import { FrontendFooterComponent } from './layouts/frontend-footer/frontend-footer.component';

import { FrontendHomeComponent } from './component/frontend-home/frontend-home.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileUserComponent } from './component/profile-user/profile-user.component';
import { FrontendUserHeaderComponent } from './layouts/frontend-user-header/frontend-user-header.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { ServiceProviderComponent } from './component/service-provider/service-provider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProviderDetailComponent } from './component/provider-detail/provider-detail.component';
import { OrderHistoryComponent } from './component/order-history/order-history.component';





@NgModule({
  declarations: [
    FrontendHomeComponent,
    FrontendHeaderComponent,
    FrontendFooterComponent,
    LoginComponent,

     ProfileUserComponent,
     FrontendUserHeaderComponent,



    LoginComponent,
    DashboardComponent,

    RegisterComponent,
    
    ServiceProviderComponent,
    ProviderDetailComponent,
    OrderHistoryComponent
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FrontendModule { }
