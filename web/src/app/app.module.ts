import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

// reducers
import { userReducer } from './reducers/user.reducer';

import ServicesModule from './services/services.module';
import appRoutes from './app.routes';
import { AppComponent } from './app.component';
// import { FooterComponent } from './footer/footer.component';
// import { TemplateComponent } from './template/template.component';

@NgModule({
  imports: [
    BrowserModule,
    ServicesModule,
    appRoutes,
    StoreModule.provideStore({ users: userReducer })
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
