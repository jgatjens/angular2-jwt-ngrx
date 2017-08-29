import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconModule, MdButtonModule } from '@angular/material';
import { CardApplicantComponent } from './card-applicant.component';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdButtonModule
  ],
  declarations: [CardApplicantComponent],
  exports: [CardApplicantComponent]
})
export class CardApplicantModule { }
