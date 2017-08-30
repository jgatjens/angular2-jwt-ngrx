import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {
  MdInputModule,
  MdProgressSpinnerModule,
  MdButtonModule,
  MdIconModule,
  MdDatepickerModule,
  MdRadioModule,
  MdSlideToggleModule,
  MdSelectModule,
  MdNativeDateModule,
  MdFormFieldModule
} from '@angular/material';
import { FormJobGeneralComponent } from './form-job-general.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdButtonModule,
    MdIconModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdRadioModule,
    MdSelectModule,
    MdFormFieldModule,
    MdSlideToggleModule
  ],
  declarations: [FormJobGeneralComponent],
  exports: [FormJobGeneralComponent]
})
export class FormJobGeneralModule { }
