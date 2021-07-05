import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ListComponent } from './component/provider/list/list.component';
import { RequestingComponent } from './component/provider/requesting/requesting.component';

const routes: Routes = [
  { path: '', component: RequestingComponent },
  {
    path: 'admin/provider/requesting',
    component:RequestingComponent
  },
  {
    path: 'provider',
    component: ListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
