import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export default class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);
  }

}
