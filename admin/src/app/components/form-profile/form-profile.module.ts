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
import { FormProfileComponent } from './form-profile.component';

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
  declarations: [FormProfileComponent],
  exports: [FormProfileComponent]
})
export class FormProfileModule { }
