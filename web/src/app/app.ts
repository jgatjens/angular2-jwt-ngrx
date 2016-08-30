import { Component } from '@angular/core';
// ui componentes
import { AppFooter, AppNavbar } from './ui';

@Component({
	directives: [
		AppFooter, AppNavbar
	]
})
export class App {
  constructor() {
    console.log('Hello Angular 2 Webpack 2');
  }
}

