import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditHistoryComponentComponent } from './credit-history-component/credit-history-component.component';
import { CreditHistoryComponent } from './credit-history/credit-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditHistoryComponentComponent,
    CreditHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
