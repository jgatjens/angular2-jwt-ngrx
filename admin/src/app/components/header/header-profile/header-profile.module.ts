import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdIconModule, MdButtonModule } from '@angular/material';
import { HeaderProfileComponent } from './header-profile.component';

@NgModule({
  imports: [
    CommonModule,
    MdIconModule,
    MdButtonModule
  ],
  declarations: [HeaderProfileComponent],
  exports: [HeaderProfileComponent]
})
export class HeaderProfileModule { }
