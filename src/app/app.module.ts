import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoleJourneyModule } from './sole-journey/sole-journey.module';
import { SoleJourneyRoutingModule } from './sole-journey/sole-journey.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatTooltipModule } from '@angular/material/tooltip';
import { PortfilioComponent } from './portfilio/portfilio.component';

@NgModule({
  declarations: [AppComponent, PortfilioComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SoleJourneyModule,
    SoleJourneyRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
