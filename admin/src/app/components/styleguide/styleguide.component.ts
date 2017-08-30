import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-styleguide',
  templateUrl: './styleguide.component.html',
  styleUrls: ['./styleguide.component.scss']
})
export class StyleguideComponent {
  @Input() header: string = 'this is header';
  @Input() inline = false;
  constructor() { }
}
