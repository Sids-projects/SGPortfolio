import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SGPortfolio';
  isCardActive: boolean = false;

  cardActive() {
    this.isCardActive = true;
  }
}
