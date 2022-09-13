import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {IPayRate} from "../models/IPayRate";

@Injectable({
  providedIn: 'root'
})
export class PayRatesService {

  public BehaviorSubject$: BehaviorSubject<IPayRate[]>;

  push = (payRate: IPayRate) => {
    this.BehaviorSubject$.next(this.BehaviorSubject$.value.concat(payRate));
  }

  constructor() {
    this.BehaviorSubject$ = new BehaviorSubject<IPayRate[]>([
      {id: 1, caption: 'Hydrogen',value: 1.0079} as IPayRate,
      {id: 2, caption: 'Helium', value: 4.0026} as IPayRate,
    ]);

    this.BehaviorSubject$.subscribe((payRates) => {
      console.log(payRates);
      console.log(payRates.length);
    });

  }
}
