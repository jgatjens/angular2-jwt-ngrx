import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICardHeader } from './card-header.interface';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent {
  @Input() public cardHeader: ICardHeader;
  @Output() public cardHeaderToggle = new EventEmitter();

  constructor() { }

  public toggle(): void {
    this.cardHeaderToggle.emit();
  }

}
