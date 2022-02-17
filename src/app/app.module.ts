import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditHistoryComponent } from './credit-history/credit-history.component';
import { ProductOfferingsComponent } from './product-offerings/product-offerings.component';
import { HistoricalLineGraphComponent } from './historical-line-graph/historical-line-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditHistoryComponent,
    ProductOfferingsComponent,
    HistoricalLineGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
