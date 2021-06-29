import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontendHomeComponent } from './component/frontend-home/frontend-home.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: '', component: FrontendHomeComponent,
   children: [
    { path: 'login', component: LoginComponent},
   ],
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontendRoutingModule {}
