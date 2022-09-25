import {PayRatesService} from "../services/pay-rates.service";
import { loadPayRates, loadPayRatesSuccess, addOrUpdatePayRate } from './pay-rates.actions';
import {Actions, concatLatestFrom, createEffect, ofType} from "@ngrx/effects";
import {catchError, EMPTY, switchMap} from "rxjs";
import {map, tap} from "rxjs/operators";
import {Injectable} from "@angular/core";
import { Store } from "@ngrx/store";
import { selectHighestPayRate } from './pay-rates.selector';

@Injectable()
export class PayRatesEffects {
  constructor(private actions$: Actions,
    private store: Store,
    private payRatesService: PayRatesService) {}

  loadPayRates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPayRates),
      switchMap(() =>
        this.payRatesService.getPayRates().pipe(
          map((payRates) => loadPayRatesSuccess({ payRates })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  maxPayRates$ = createEffect(() =>
  this.actions$.pipe(
    ofType(addOrUpdatePayRate),
    concatLatestFrom(() => this.store.select(selectHighestPayRate)),
    tap(([, highest]) => console.log(highest?.value))
  ), {dispatch: false});
}
