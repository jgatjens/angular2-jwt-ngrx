import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MaterialModule } from '@angular/material';

import LoginComponent from './login.component';
import loginRoutes from './login.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule.forRoot(),
        loginRoutes
    ],
    declarations: [LoginComponent]
})
export default class LoginModule { }
