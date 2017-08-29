import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './default.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DefaultLayoutComponent],
  exports: [DefaultLayoutComponent]
})
export class DefaultLayoutModule { }
