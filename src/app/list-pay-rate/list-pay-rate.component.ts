import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {IPayRate} from "../models/IPayRate";

@Component({
  selector: 'app-list-pay-rate',
  templateUrl: './list-pay-rate.component.html',
  styleUrls: ['./list-pay-rate.component.less']
})
export class ListPayRateComponent implements OnInit {

  payRates$: Observable<IPayRate[]> | undefined;

  constructor() {
    this.payRates$ = of([{
      id: 1,
      caption: 'Hourly',
      value: 10
    }])
  }

  ngOnInit(): void {
  }

}
