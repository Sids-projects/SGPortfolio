import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SoleJourneyComponent } from './sole-journey.component';
import { HomeComponent } from './screens/home/home.component';
import { BlogComponent } from './screens/blog/blog.component';
import { ShopComponent } from './screens/shop/shop.component';

const routes: Routes = [
  {
    path: 'sj-router',
    component: SoleJourneyComponent,
    children: [
      { path: 'sj-home', component: HomeComponent },
      { path: 'sj-blog', component: BlogComponent },
      { path: 'sj-shop', component: ShopComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoleJourneyRoutingModule {}
