import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  public error: boolean = false;
  public inProgress: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form);

    this.inProgress = true;

    setTimeout(() => {
      this.error = true;
      this.inProgress = false;
    }, 1500);

  }

}
