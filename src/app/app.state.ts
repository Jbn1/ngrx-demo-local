import {PayRatesState} from "./store/pay-rates.state";
import {ActionReducerMap} from "@ngrx/store";
import {payRatesReducer} from "./store/pay-rates.reducer";

export interface AppState {
  payRates: PayRatesState;
}

export const appReducer: ActionReducerMap<AppState> = {
  payRates: payRatesReducer
}
