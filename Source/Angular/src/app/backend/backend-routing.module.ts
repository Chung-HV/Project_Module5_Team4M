import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendComponent } from './backend.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './provider/list/list.component';
import { RequestingComponent } from './provider/requesting/requesting.component';

const routes: Routes = [
  { path: '', component: BackendComponent },
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
