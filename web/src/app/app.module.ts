import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import appRoutes from './app.routes';
import { AppComponent } from './app.component';
// import { FooterComponent } from './footer/footer.component';
// import { TemplateComponent } from './template/template.component';

@NgModule({
  imports: [BrowserModule, appRoutes],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
