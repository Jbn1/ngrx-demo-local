import { Injectable } from '@angular/core';
import {auditTime, Observable, of} from "rxjs";
import {IPayRate} from "../models/IPayRate";

@Injectable({
  providedIn: 'root'
})
export class PayRatesService {

  constructor() { }

  getPayRates(): Observable<IPayRate[]> {

    return of([
      {
        id: 1,
        caption: 'Normal hours',
        value: 25
      },
      {
        id: 2,
        caption: 'Hours > 37.5h',
        value: 30
      },
      {
        id: 3,
        caption: 'Hours > 40h',
        value: 35
      },
      {
        id: 4,
        caption: 'Weekend hours',
        value: 32.5
      }
    ]).pipe(auditTime(1500));
  }
}
