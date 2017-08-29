import { Component, Input } from '@angular/core';
import { ICard } from "../card/card.interface";

@Component({
  selector: 'app-card-applicant',
  templateUrl: './card-applicant.component.html',
  styleUrls: ['./card-applicant.component.scss']
})
export class CardApplicantComponent {
  @Input() public content: ICard;
  constructor() { }
}
