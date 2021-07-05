import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendRoutingModule } from './backend-routing.module';
import { DashboardComponent } from './component/layout/dashboard/dashboard.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { RequestingComponent } from './component/provider/requesting/requesting.component';
import { ListComponent } from './component/provider/list/list.component';
import { LoginComponent } from './component/login/login.component';


@NgModule({
  declarations: [
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    RequestingComponent,
    ListComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BackendRoutingModule
  ]
})
export class BackendModule { }
