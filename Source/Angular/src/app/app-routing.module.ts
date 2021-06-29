import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./frontend/frontend.module').then(m => m.FrontendModule)
      },
      // {
      //   path: 'admin',
      //   loadChildren: () => import('./backend/backend.module').then(m => m.BackendModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
