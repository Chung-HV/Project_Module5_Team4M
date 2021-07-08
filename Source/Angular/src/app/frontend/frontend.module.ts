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
import { ProviderDetailComponent } from './component/provider/provider-detail/provider-detail.component';
import { ProviderOrdersComponent } from './component/order/provider-orders/provider-orders.component';
import { ServiceListComponent } from './component/provider/service-list/service-list.component';
import { CustomerOrdersComponent,} from './component/order/customer-order/customer-orders.component';
import { UserProfileSidebarComponent } from './layouts/user-profile-sidebar/user-profile-sidebar.component';
import { CreateAlbumComponent } from './component/user-album/create-album/create-album.component';
import { CurrencyPipe} from '@angular/common';

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
    ProviderOrdersComponent,
    CustomerOrdersComponent,
    UserProfileSidebarComponent,
    CreateAlbumComponent,

  ],
  imports: [
    CommonModule,
    FrontendRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [CurrencyPipe]
})
export class FrontendModule {}
