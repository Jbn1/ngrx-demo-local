import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {selectHighestPayRate, selectLowestPayRate, selectPayRates} from "../store/pay-rates.selector";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-counter-pay-rate',
  templateUrl: './counter-pay-rate.component.html',
  styleUrls: ['./counter-pay-rate.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPayRateComponent implements OnInit {

  payRatesCount$: Observable<number>;
  highestPayRates$: Observable<number>;
  lowestPayRates$: Observable<number>;

  constructor(private store: Store) {
    this.payRatesCount$ = this.store.select(selectPayRates).pipe(map(payRates => payRates.length));
    this.lowestPayRates$ = this.store.select(selectLowestPayRate).pipe(map(payRate => payRate?.value ?? 0));
    this.highestPayRates$ = this.store.select(selectHighestPayRate).pipe(map(payRate => payRate?.value ?? 0));

  }

  ngOnInit(): void {
  }

}
