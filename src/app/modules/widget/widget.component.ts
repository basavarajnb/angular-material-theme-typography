import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Output() public creditHistory = new EventEmitter();
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToCreditHistory()
  {
    this.route.navigateByUrl("credit-history")
  }

}
