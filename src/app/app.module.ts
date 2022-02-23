import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditHistoryComponent } from './credit-history/credit-history.component';
import { ProductOfferingsComponent } from './product-offerings/product-offerings.component';
import { HistoricalLineGraphComponent } from './historical-line-graph/historical-line-graph.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { WidgetModule } from './modules/widget/widget.module';
import { MaterialModule } from './material.module';
import { CiaChartsModule } from './modules/charts/charts.module';

@NgModule({
  declarations: [
    AppComponent,
    CreditHistoryComponent,
    ProductOfferingsComponent,
    HistoricalLineGraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    WidgetModule,
    CiaChartsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
