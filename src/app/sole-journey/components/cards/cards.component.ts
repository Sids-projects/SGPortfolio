import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  @Input() imageInput: string =
    './../../../../assets/sole-journey/img/Shoe-1.png';
  @Input() brand: string = 'Brand Name';
  @Input() prize: number = 0;
  @Input() type: string = 'Shoe Type';
  @Input() discount: number = 0;
  @Input() badgeInput: any = ['Running Show', 'Mens'];
  @Input() color: any = ['red', 'blue', 'green'];
  heartNotSelected: boolean = true;
  heartSelected: boolean = false;

  heartMethod() {
    this.heartNotSelected = !this.heartNotSelected;
    this.heartSelected = !this.heartSelected;
  }
}
