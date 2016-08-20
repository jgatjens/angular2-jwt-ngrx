import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, RouterConfig } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Register } from './register';

export const ROUTER_CONFIG = [
  { path: '', component: Register, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Register
  ],
  imports: [
    // Components / Directives/ Pipes
    RouterModule.forChild(ROUTER_CONFIG),
    FormsModule,
    BrowserModule
  ]
})
export default class RegisterModule {
  static routes = ROUTER_CONFIG;
}

