import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {IPayRate} from "../models/IPayRate";

@Injectable({
  providedIn: 'root'
})
export class PayRatesService {

  constructor() { }

  getPayRates(): Observable<IPayRate[]> {
    setTimeout(() => {
      console.log('getPayRates');
    }, 2000);

    return of([
      {
        id: 1,
        caption: 'Heures normales',
        value: 10
      },
      {
        id: 2,
        caption: 'Heures > 35h',
        value: 12.5
      },
      {
        id: 3,
        caption: 'Heures dimanche',
        value: 16
      },
      {
        id: 4,
        caption: 'Heures astreintes',
        value: 15
      }
    ]);
  }
}
