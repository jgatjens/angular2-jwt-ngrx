import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StyleguideComponent } from './styleguide.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StyleguideComponent],
  exports: [StyleguideComponent]
})
export class StyleguideModule { }
