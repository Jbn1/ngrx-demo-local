import { createFeatureSelector, createSelector } from '@ngrx/store';
import {PayRatesState, payRatesFeatureName} from "./pay-rates.state";

export const payRatesFeatureSelector = createFeatureSelector<PayRatesState>(payRatesFeatureName);

export const selectPayRates = createSelector(
  payRatesFeatureSelector,
  (state: PayRatesState) => state.payRates
);

export const selectHighestPayRate = createSelector(
  payRatesFeatureSelector,
  (state: PayRatesState) => {
    if (state.payRates.length === 0) {
      return null;
    }
    return state.payRates.reduce((prev, current) => (prev.value > current.value) ? prev : current);
  }
);

export const selectLowestPayRate = createSelector(
  payRatesFeatureSelector,
  (state: PayRatesState) => {
    if (state.payRates.length === 0) {
      return null;
    }
    return state.payRates.reduce((prev, current) => (prev.value < current.value) ? prev : current);
  }
);

export const selectPayRatesLoading = createSelector(
  payRatesFeatureSelector,
  (state: PayRatesState) => state.isLoading
);
