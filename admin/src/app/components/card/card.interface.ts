import { ICardHeader } from '../card-header/card-header.interface';

export interface ICard {
  header: ICardHeader;
  description: string;
  type: string;
  imgSrc?: string;
  email?: string;
  phone?: string;
}
