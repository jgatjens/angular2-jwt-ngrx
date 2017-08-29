import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdToolbarModule,
  MdIconModule,
  MdButtonModule
} from '@angular/material';
import { SearchBarModule } from './search-bar/search-bar.module';
import { HeaderProfileModule } from './header-profile/header-profile.module';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    SearchBarModule,
    HeaderProfileModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
