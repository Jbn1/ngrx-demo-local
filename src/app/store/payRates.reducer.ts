import {Action, createReducer, on} from '@ngrx/store';
import * as payRatesActions from './payRates.actions';
import {initialPayRatesState} from "./payRates.state";

const _payRatesReducerInternal = createReducer(
  initialPayRatesState,

  on(payRatesActions.addOrUpdatePayRate, (state, { payRate }) => {
    const payRates = [...state.payRates];
    const index = payRates.findIndex(p => p.id === payRate.id);
    if (index >= 0) {
      payRates[index] = payRate;
    } else {
      payRates.push(payRate);
    }

    return {
      ...state,
      payRates: payRates
    }
  }),

  on(payRatesActions.deletePayRate, (state, { payRateId }) => {
    const payRates = [...state.payRates];
    const index = payRates.findIndex(p => p.id === payRateId);
    if (index >= 0) {
      payRates.splice(index, 1);
    }

    return {
      ...state,
      payRates: payRates
    }
  }),

  on(payRatesActions.resetPayRates, (state) => {
    return {
      ...state,
      payRates: []
    }
  })
);

export function payRatesReducer(state: any | undefined, action: Action) {
  return _payRatesReducerInternal(state, action);
}
