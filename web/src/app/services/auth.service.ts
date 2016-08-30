import { Injectable } from '@angular/core';
// import { StoreHelper } from './store-helper';
import { Store } from '@ngrx/store';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ApiService } from './api.service';
import { USER_LOGIN, USER_LOGOUT } from '../reducers/users.reducer';

export const USER_KEY: string = 'luca_gatjens_17';


@Injectable()
export class AuthService implements CanActivate {

	constructor(
		 // private storeHelper: StoreHelper,
		 private api: ApiService,
		 private router: Router,
		 private _store: Store <any>
		 // private store: Store
	 ) {
		const user: any = JSON.parse(window.localStorage.getItem(USER_KEY));
		if (user) {
			this.setUser(user);
		}
	}

	setUser(user: any) {
		window.localStorage.setItem(USER_KEY, JSON.stringify(user));
		this.api.setHeaders({Authorization: `Bearer ${user.token}`});
		this._store.dispatch({ type: USER_LOGIN, payload: user });
	}

	isAuthorized(): boolean {
		return Boolean(window.localStorage.getItem(USER_KEY));
	}

	canActivate(): boolean {
		const isAuth = this.isAuthorized();
		if (!isAuth) {
			this.router.navigate(['', 'login']);
		}

		return isAuth;
	}

	authenticate(path, creds): Observable<any> {
		return this.api.post(`/${path}`, creds)
			.do(res => this.setUser(res))
			.map(res => res.data);
	}

	signout() {
		window.localStorage.removeItem(USER_KEY);
		this._store.dispatch({ type: USER_LOGOUT });
		this.router.navigate(['', 'login']);
	}
}
