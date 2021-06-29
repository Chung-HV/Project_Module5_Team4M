import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from './frontend-routing.module';

import { FrontendHeaderComponent } from './layouts/frontend-header/frontend-header.component';
import { FrontendFooterComponent } from './layouts/frontend-footer/frontend-footer.component';

import { FrontendHomeComponent } from './component/frontend-home/frontend-home.component';
import { LoginComponent } from './component/login/login.component';






@NgModule({
  declarations: [
    FrontendHomeComponent,

    FrontendHeaderComponent,
    FrontendFooterComponent,

    LoginComponent,
 
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
