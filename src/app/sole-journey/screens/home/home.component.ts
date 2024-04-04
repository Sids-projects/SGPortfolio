import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: any = [];
  filteredShoes: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.products = this.dataService.products;
  }

  filterShoes(param: string) {
    this.filteredShoes = this.products.filter((product: any) => {
      return this.filteredShoes ? product.filter === param : this.products;
    });
  }
}
