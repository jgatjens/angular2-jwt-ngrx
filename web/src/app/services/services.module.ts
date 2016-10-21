import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';

export * from './api.service';
export * from './auth.service';

@NgModule({
  imports: [
    HttpModule
  ],
  providers: [
    ApiService,
    AuthService
  ]
})
export default class ServicesModule { }
