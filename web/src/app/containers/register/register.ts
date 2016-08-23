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
export class Register {

	user = {
    email: '',
    username: '',
    password: ''
  };

  constructor(private auth: AuthService, private router: Router) {
  	console.log('register');
  }

  authenticate() {

    this.auth.authenticate('users', this.user)
    .subscribe(() => this.router.navigate(['']))
  }
}
