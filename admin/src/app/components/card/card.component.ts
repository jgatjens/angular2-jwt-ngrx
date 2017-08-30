import { Component, Input } from '@angular/core';
import { ICard } from './card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public toggleAccordion = false;
  @Input() public card: ICard;

  constructor() {}

  public cardHeaderToggle(): void {
    this.toggleAccordion = !this.toggleAccordion;
  }
}
