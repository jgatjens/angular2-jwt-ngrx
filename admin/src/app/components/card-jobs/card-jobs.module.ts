import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconModule, MdButtonModule, MdTooltipModule } from '@angular/material';
import { CardJobsComponent } from './card-jobs.component';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdButtonModule,
    MdTooltipModule
  ],
  declarations: [CardJobsComponent],
  exports: [CardJobsComponent]
})
export class CardJobsModule { }
