import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {
  MdInputModule,
  MdProgressSpinnerModule,
  MdButtonModule,
  MdRadioModule,
  MdIconModule
} from '@angular/material';
import { FormPasswordComponent } from './form-password.component';

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdButtonModule,
    MdRadioModule,
    MdIconModule,
    FormsModule
  ],
  declarations: [FormPasswordComponent],
  exports: [FormPasswordComponent]
})
export class FormPasswordModule { }
