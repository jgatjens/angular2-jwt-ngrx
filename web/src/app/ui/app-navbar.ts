import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { IUser } from '../reducers/users.reducer';
import { AuthService } from '../services'


@Component({
	selector: 'app-navbar',
	styles: [`
		.form-inline:last-child {
			margin-right: 10px;
		}
	`],
	template: `
		<nav class="navbar navbar-light bg-faded">
			<a class="navbar-brand" href="#">Careers.io</a>
			<ul *ngIf="isUserLogIn" class="nav navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="#" routerLink="">Jobs</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#" routerLink="applicant">Applicants</a>
				</li>
			</ul>

			<div *ngIf="isUserLogIn" class="form-inline pull-xs-right">
				<a class="btn btn-outline-danger" (click)="logout()">Log Out</a>
			</div>
			<div *ngIf="!isUserLogIn" class="form-inline pull-xs-right">
				<a class="btn btn-outline-primary" routerLink="login">Login</a>
			</div>
			<div *ngIf="!isUserLogIn" class="form-inline pull-xs-right">
				<a class="btn btn-outline-primary" routerLink="register">Sign In</a>
			</div>
		</nav>
	`
})
export class AppNavbar {
	user: Observable <any>;
	isUserLogIn: boolean = false;

	constructor (private _auth: AuthService, public store: Store<IUser>) {

		this.user = this.store.select('users');

		this.user.subscribe((user) => {
			this.isUserLogIn = false;
			if (user){
				this.isUserLogIn = true;
			}
		});
	}

	logout() {
		this._auth.signout();
	}

}
