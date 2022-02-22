import { Component, OnInit } from '@angular/core';
import { AppRoutes } from './common/models/app.model';
import { Stack } from './common/models/stack.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'cia';
  public appRoutesEnum = AppRoutes;
  public appRoutes = AppRoutes.Disclaimers;
  public appRouteStack = new Stack<AppRoutes>();

  constructor() {}

  ngOnInit(): void {
    this.appRouteStack.push(this.appRoutes);
  }

  public disclaimersAccepted() {
    this.appRoutes = AppRoutes.Main;
    this.appRouteStack.push(this.appRoutes);
  }

  public disclaimersRejected() {
    this.appRouteStack.push(this.appRoutes);
    this.appRoutes = AppRoutes.DisclaimersRejected;
  }

  public back() {
    this.appRouteStack.pop();
    this.appRoutes = this.appRouteStack.peek() as AppRoutes;
  }
}
