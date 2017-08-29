import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: '', loadChildren: './pages/homepage/homepage.module#HomepagePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
