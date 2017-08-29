import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHeaderModule } from '../card-header/card-header.module';
import { CardComponent } from './card.component';

@NgModule({
  imports: [
    CommonModule,
    CardHeaderModule
  ],
  declarations: [CardComponent],
  exports: [CardComponent]
})
export class CardModule { }
