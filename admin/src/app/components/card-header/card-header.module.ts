import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconModule, MdButtonModule, MdMenuModule } from '@angular/material';
import { CardHeaderComponent } from './card-header.component';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdButtonModule,
    MdMenuModule
  ],
  declarations: [CardHeaderComponent],
  exports: [CardHeaderComponent]
})
export class CardHeaderModule { }
