import {PayRatesService} from "../services/pay-rates.service";
import {loadPayRates, loadPayRatesSuccess} from "./pay-rates.actions";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, EMPTY, switchMap} from "rxjs";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable()
export class PayRatesEffects {
  constructor(private actions$: Actions, private payRatesService: PayRatesService) {}

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
}
