import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendHomeComponent } from './component/frontend-home/frontend-home.component';




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
