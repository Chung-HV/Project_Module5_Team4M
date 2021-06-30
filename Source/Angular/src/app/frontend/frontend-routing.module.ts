import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FrontendHomeComponent } from './component/frontend-home/frontend-home.component';
import { LoginComponent } from './component/login/login.component';

import { ProfileUserComponent } from './component/profile-user/profile-user.component';

import { RegisterComponent } from './component/register/register.component';


const routes: Routes = [
  { path: '', component: ProfileUserComponent,
   children: [
     {path:'',component:DashboardComponent},
    { path: 'login', component: LoginComponent},

    {path:'register',component:RegisterComponent}

   ],
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontendRoutingModule {}
