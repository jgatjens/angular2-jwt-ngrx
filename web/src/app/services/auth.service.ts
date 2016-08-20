import { Injectable } from '@angular/core';
// import { StoreHelper } from './store-helper';
import { Store } from '@ngrx/store';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ApiService } from './api.service';
import { USER_LOGIN, USER_LOGOUT } from '../reducers/users.reducer';

@Injectable()
export class AuthService implements CanActivate {
	JWT_KEY: string = 'luca_gatjens_17';

	constructor(
		 // private storeHelper: StoreHelper,
		 private api: ApiService,
		 private router: Router,
		 private _store: Store <any>
		 // private store: Store
	 ) {
		const token = window.localStorage.getItem(this.JWT_KEY);
		if (token) {
			this.setJwt(token);
		}
	}

	setJwt(jwt: string) {
		window.localStorage.setItem(this.JWT_KEY, jwt);
		this.api.setHeaders({Authorization: `Bearer ${jwt}`});
	}

	isAuthorized(): boolean {
		return Boolean(window.localStorage.getItem(this.JWT_KEY));
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
			.do(res => this.setJwt(res.token))
			.do(res => this._store.dispatch({ type: USER_LOGIN, payload: res }))
			.map(res => res.data);
	}

	signout() {
		window.localStorage.removeItem(this.JWT_KEY);
		this._store.dispatch({ type: USER_LOGOUT });
		this.router.navigate(['', 'login']);
	}
}
