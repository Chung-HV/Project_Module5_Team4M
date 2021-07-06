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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProviderDetailComponent } from './component/provider-detail/provider-detail.component';
import { OrderListComponent } from './component/order/order-list/order-list.component';
import { ServiceListComponent } from './component/provider/service-list/service-list.component';
import { OrderingComponent } from './component/user/ordering/ordering.component';
import { UserProfileSidebarComponent } from './layouts/user-profile-sidebar/user-profile-sidebar.component';

@NgModule({
  declarations: [
    FrontendHomeComponent,
    FrontendHeaderComponent,
    FrontendFooterComponent,
    ProfileUserComponent,
    FrontendUserHeaderComponent,
    ServiceListComponent,
    LoginComponent,
    DashboardComponent,

    RegisterComponent,

    ProviderDetailComponent,
    OrderListComponent,
    OrderingComponent,
    UserProfileSidebarComponent,
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class FrontendModule {}
