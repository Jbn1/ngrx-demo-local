import {PayRatesState} from "./store/payRates.state";
import {ActionReducerMap} from "@ngrx/store";
import {payRatesReducer} from "./store/payRates.reducer";

export interface AppState {
  payRates: PayRatesState;
}

export const appReducer: ActionReducerMap<AppState> = {
  payRates: payRatesReducer
}
