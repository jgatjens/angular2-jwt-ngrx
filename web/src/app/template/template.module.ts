import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material 2 
import { MaterialModule } from '@angular/material';

import TemplateComponent from './template.component';
import templateRoutes from './template.routes';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule.forRoot(),
        templateRoutes
    ],
    declarations: [TemplateComponent],
})
export default class TemplateModule { }
