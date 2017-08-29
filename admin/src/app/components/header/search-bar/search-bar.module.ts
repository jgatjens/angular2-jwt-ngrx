import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconModule, MdButtonModule } from '@angular/material';
import { SearchBarComponent } from './search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdButtonModule
  ],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent]
})
export class SearchBarModule { }
