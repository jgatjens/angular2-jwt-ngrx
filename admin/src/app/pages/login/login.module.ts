import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DefaultLayoutModule } from '../../layouts/default/default.module';
import { LoginPageComponent } from './login.component';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: LoginPageComponent }]),
    CommonModule,
    DefaultLayoutModule
  ],
  declarations: [LoginPageComponent]
})
export class LoginPageModule { }
