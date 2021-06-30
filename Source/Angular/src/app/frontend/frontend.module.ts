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
import { ReactiveFormsModule } from '@angular/forms';





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
    ServiceProviderComponent

  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    ReactiveFormsModule,
  ]
})
export class FrontendModule { }
