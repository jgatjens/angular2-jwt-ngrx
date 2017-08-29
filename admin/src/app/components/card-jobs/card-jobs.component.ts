import { Component, Input } from '@angular/core';
import { ICard } from '../card/card.interface';

@Component({
  selector: 'app-card-jobs',
  templateUrl: './card-jobs.component.html',
  styleUrls: ['./card-jobs.component.scss']
})
export class CardJobsComponent {
  @Input() public content: ICard;
  constructor() { }
}
