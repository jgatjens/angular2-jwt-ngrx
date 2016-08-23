import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services'
import { FORM_DIRECTIVES } from '@angular/forms';

@Component({
	styles: [`
		form {
			padding: 50px 0;
		}
	`],
	directives: [...FORM_DIRECTIVES]
})
export class Login {

	user = {
		username: 'jgatjens',
		password: 'password1'
	};

	constructor(
		private auth: AuthService,
		private router: Router
	){
		console.log('Login controller');
	}

	authenticate() {
		console.log(this.user);
		this.auth.authenticate('users/login', this.user)
		.subscribe(() => {
			this.router.navigate(['']);
		})
	}
}
