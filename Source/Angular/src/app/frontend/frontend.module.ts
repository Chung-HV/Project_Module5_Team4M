import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendHomeComponent } from './home/component/frontend-home/frontend-home.component';
import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendHeaderComponent } from './layouts/frontend-header/frontend-header.component';
import { FrontendFooterComponent } from './layouts/frontend-footer/frontend-footer.component';




@NgModule({
  declarations: [
    FrontendHomeComponent,
    FrontendHeaderComponent,
    FrontendFooterComponent
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
