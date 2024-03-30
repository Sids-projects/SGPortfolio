import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SGPortfolio';
  isCardActiveLeft: boolean = false;
  isCardActiveRight: boolean = false;

  cardActiveLeft() {
    this.isCardActiveLeft = true;
    console.log('left');
  }

  cardActiveRight() {
    this.isCardActiveRight = true;
    console.log('right');
  }
}
