import {IPayRate} from "../models/IPayRate";
import {PayRatesEffects} from "./pay-rates.effects";

export const payRatesFeatureName = 'payRates';

export interface PayRatesState {
  payRates: IPayRate[];
  isLoading: boolean;
}

export const initialPayRatesState: PayRatesState = {
  payRates: [],
  isLoading: false
}

export const payRatesEffects = [PayRatesEffects];
