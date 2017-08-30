import { Component } from '@angular/core';

@Component({
  selector: 'app-form-job-general',
  templateUrl: './form-job-general.component.html',
  styleUrls: ['./form-job-general.component.scss']
})
export class FormJobGeneralComponent {
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
