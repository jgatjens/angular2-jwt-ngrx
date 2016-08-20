import { Component } from '@angular/core';

@Component({
	selector: 'app-navbar',
	template: `
		<nav class="navbar navbar-light bg-faded">
			<a class="navbar-brand" href="#">Careers.io</a>
			<ul class="nav navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="#" routerLink="">Jobs</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#" routerLink="applicant">Applicants</a>
				</li>
			</ul>

			<div class="form-inline pull-xs-right">
				<a class="btn btn-outline-primary" routerLink="login">Login</a>
			</div>
		</nav>
	`
})
export class AppNavbar {}
