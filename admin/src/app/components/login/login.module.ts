import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { MdInputModule, MdProgressSpinnerModule, MdButtonModule } from '@angular/material';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      MdInputModule,
      MdButtonModule,
      MdProgressSpinnerModule
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule { }
