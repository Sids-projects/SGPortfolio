import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoleJourneyComponent } from './sole-journey.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './screens/home/home.component';
import { BlogComponent } from './screens/blog/blog.component';
import { ShopComponent } from './screens/shop/shop.component';
import { SoleJourneyRoutingModule } from './sole-journey.routing.module';

@NgModule({
  declarations: [
    SoleJourneyComponent,
    NavigationComponent,
    CardsComponent,
    HomeComponent,
    BlogComponent,
    ShopComponent,
  ],
  imports: [CommonModule, SoleJourneyRoutingModule],
})
export class SoleJourneyModule {}
