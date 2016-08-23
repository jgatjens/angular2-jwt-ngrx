import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// ui componentes
import { AppFooter, AppNavbar } from './ui';
import { USER_LOGIN, USER_LOGOUT } from './reducers/users.reducer';
import { USER_KEY } from './services/auth.service'

@Component({
	directives: [
		AppFooter, AppNavbar
	]
})
export class App {
  constructor(private _store: Store <any>) {
    console.log('Hello Angular 2 Webpack 2');

    // set user if reloads
		const user: any = JSON.parse(window.localStorage.getItem(USER_KEY));
		if (user){
			this._store.dispatch({ type: USER_LOGIN, payload: user });
		}

  }
}

