import {IPayRate} from "../models/IPayRate";

export const payRatesFeatureName = 'payRates';

export interface PayRatesState {
  payRates: IPayRate[];
}

export const initialPayRatesState: PayRatesState = {
  payRates: [],
}
