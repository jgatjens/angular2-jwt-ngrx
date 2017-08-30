import { Component } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  public error: boolean = false;
  public inProgress: boolean = false;

  constructor() { }

  onSubmit(form) {
    console.log(form);

    this.inProgress = true;

    setTimeout(() => {
      this.error = true;
      this.inProgress = false;
    }, 1500);
  }
}
