import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-portfilio',
  templateUrl: './portfilio.component.html',
  styleUrls: ['./portfilio.component.scss'],
})
export class PortfilioComponent {
  portfolioContent: any[] = [];
  cardTwoActive: boolean = false;
  cardThreeActive: boolean = false;

  constructor(private dataService: DataService) {
    this.portfolioContent = this.dataService.portfolioContent;
  }

  cardTwo() {
    this.cardTwoActive = !this.cardTwoActive;
  }

  cardThree() {
    this.cardThreeActive = !this.cardThreeActive;
  }
}
