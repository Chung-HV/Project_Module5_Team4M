import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendHomeComponent } from './component/frontend-home/frontend-home.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
<<<<<<< HEAD
import { ServiceProviderComponent } from './component/service-provider/service-provider.component';
=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> feature




@NgModule({
  declarations: [
    FrontendHomeComponent,
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
