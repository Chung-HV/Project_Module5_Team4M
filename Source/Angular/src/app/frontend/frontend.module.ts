import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from './frontend-routing.module';

import { FrontendHeaderComponent } from './layouts/frontend-header/frontend-header.component';
import { FrontendFooterComponent } from './layouts/frontend-footer/frontend-footer.component';

import { FrontendHomeComponent } from './component/frontend-home/frontend-home.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileUserComponent } from './component/profile-user/profile-user.component';
import { FrontendUserHeaderComponent } from './layouts/frontend-user-header/frontend-user-header.component';






@NgModule({
  declarations: [
    FrontendHomeComponent,

    FrontendHeaderComponent,
    FrontendFooterComponent,

    LoginComponent,
     ProfileUserComponent,
     FrontendUserHeaderComponent,
 
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
