import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendHomeComponent } from './component/frontend-home/frontend-home.component';

const routes: Routes = [
  { path: '', component: FrontendHomeComponent,
   children: [

   ] },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontendRoutingModule {}
