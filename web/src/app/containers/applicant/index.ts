import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, RouterConfig } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Applicant } from './applicant';

export const ROUTER_CONFIG = [
  { path: '', component: Applicant, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    Applicant
  ],
  imports: [
    // Components / Directives/ Pipes
    RouterModule.forChild(ROUTER_CONFIG),
    FormsModule,
    BrowserModule
  ]
})
export default class ApplicantModule {
  static routes = ROUTER_CONFIG;
}

