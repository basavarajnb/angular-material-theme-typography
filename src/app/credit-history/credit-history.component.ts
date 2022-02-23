import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table'
import { Router } from '@angular/router';
import { CreditHistory } from '../common/credit.history.model';

@Component({
  selector: 'app-credit-history',
  templateUrl: './credit-history.component.html',
  styleUrls: ['./credit-history.component.scss']
})


export class CreditHistoryComponent implements OnInit {

  constructor(private route: Router) { }

  CredHistory : CreditHistory[] =[{
    "score": 750,
    "month": "January",
    "change": 5,
  }, {
    "score": 710,
    "month": "Feburary",
    "change": -40,
  }, 
  {
    "score": 700,
    "month": "March",
    "change": -10,
  }, {
    "score": 750,
    "month": "April",
    "change": +50,
  }, 
  {
    "score": 760,
    "month": "May",
    "change": +10,
  }, {
    "score": 770,
    "month": "June",
    "change": +10,
  }, 
  ];

  displayedColumns: string[] = ['score', 'month', 'change'];

  ngOnInit(): void {

  }

  goToProductOfferings()
  {
    this.route.navigateByUrl("credit-history")
  }

}
