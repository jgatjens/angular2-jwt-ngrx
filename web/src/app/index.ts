import { Store, StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { counterReducer } from './reducers';
import { Job, JobModule } from './containers';

const ROUTER_CONFIG = [
  { path: '', component: Job, pathMatch: 'full' },
  { path: 'applicant', loadChildren: './containers/applicant' },
  { path: 'login', loadChildren: './containers/login' },
];

@NgModule({
  providers: [],
  declarations: [
    // Components / Directives/ Pipes
    Job,
  ],
  imports: [
    RouterModule.forChild(ROUTER_CONFIG),
    StoreModule.provideStore({ counter: counterReducer }, { counter: 0 }),
    JobModule,
  ],
})
export default class AppModule {
  static routes = ROUTER_CONFIG
}

