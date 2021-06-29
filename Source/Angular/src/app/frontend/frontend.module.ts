import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendHomeComponent } from './home/component/frontend-home/frontend-home.component';
import { FrontendRoutingModule } from './frontend-routing.module';




@NgModule({
  declarations: [
    FrontendHomeComponent
  ],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
