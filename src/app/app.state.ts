import {PayRatesState} from "./store/pay-rates.state";
import {ActionReducerMap} from "@ngrx/store";
import {payRatesReducer} from "./store/pay-rates.reducer";
import {FilterState} from "./store/filters/filters.states";
import {filtersReducer} from "./store/filters/filters.reducer";

export interface AppState {
  payRates: PayRatesState;
  filters: FilterState
}

export const appReducer: ActionReducerMap<AppState> = {
  payRates: payRatesReducer,
  filters: filtersReducer
}
