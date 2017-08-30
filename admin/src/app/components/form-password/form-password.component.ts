import { Component } from '@angular/core';

@Component({
  selector: 'app-form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.scss']
})
export class FormPasswordComponent {
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
