import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, RouterConfig } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Login } from './login';
import { AuthService, ApiService } from '../../services';

export const ROUTER_CONFIG = [
  { path: '', component: Login, pathMatch: 'full' }
];

@NgModule({
	providers: [
		AuthService, ApiService
	],
  declarations: [
    Login
  ],
  imports: [
    // Components / Directives/ Pipes
    RouterModule.forChild(ROUTER_CONFIG),
    FormsModule,
    BrowserModule
  ]
})
export default class LoginModule {
  static routes = ROUTER_CONFIG;
}

