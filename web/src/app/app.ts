import { Component } from '@angular/core';
import { AppFooter, AppNavbar } from './ui';
import { MyTest } from './ui';

@Component({
	directives: [AppFooter, AppNavbar, MyTest]
})
export class App {
  constructor() {
    console.log('Hello Angular 2 Webpack 2');
  }
}

