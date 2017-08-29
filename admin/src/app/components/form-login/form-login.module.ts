import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {
  MdInputModule,
  MdProgressSpinnerModule,
  MdButtonModule,
  MdIconModule
} from '@angular/material';
import { FormLoginComponent } from './form-login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: [FormLoginComponent],
  exports: [FormLoginComponent]
})
export class FormLoginModule { }
