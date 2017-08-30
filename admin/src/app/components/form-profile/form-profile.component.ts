import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.scss']
})
export class FormProfileComponent implements OnInit {
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
