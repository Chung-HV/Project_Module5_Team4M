import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontendHomeComponent } from './home/component/frontend-home/frontend-home.component';

const routes: Routes = [
  // {path: 'shop', component: FrontendProducsListComponent},
  {path: '', component: FrontendHomeComponent},
  // {path: 'shop/detail/:id', component: FrontendProductDetailComponent},
  // {path: 'shop/cart', component: FrontendCartComponent},


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
