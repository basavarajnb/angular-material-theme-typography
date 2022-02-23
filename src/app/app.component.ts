import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppRoutes } from './common/models/app.model';
import { Stack } from './common/models/stack.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Credit Info App';
  public appRoutesEnum = AppRoutes;
  public appRoutes = AppRoutes.Disclaimers;
  public appRouteStack = new Stack<AppRoutes>();

  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getFicoScore();
    this.appRouteStack.push(this.appRoutes);
  }

  public getFicoScore() {
    this.httpClient.get('https://cia-test-api-1.azurewebsites.net/api/CreditReport').subscribe((response) => {
      console.log('response => ', response);
    })
  }


  public disclaimersAccepted() {
    this.appRoutes = AppRoutes.Main;
    this.appRouteStack.push(this.appRoutes);
  }

  public disclaimersRejected() {
    this.appRouteStack.push(this.appRoutes);
    this.appRoutes = AppRoutes.DisclaimersRejected;
  }

  public goToCreditHistory() {
    this.appRouteStack.push(this.appRoutes);
    this.appRoutes = AppRoutes.CreidtHistory;
  }


  public back() {
    if (this.appRouteStack.size() > 0) {
      this.appRouteStack.pop();
      this.appRoutes = this.appRouteStack.peek() as AppRoutes;
    }
  }
}
