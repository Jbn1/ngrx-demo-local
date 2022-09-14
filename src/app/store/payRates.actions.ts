import {createAction, props} from "@ngrx/store";
import {IPayRate} from "../models/IPayRate";

export const addOrUpdatePayRate = createAction('[PayRates] addOrUpdatePayRate', props<{ payRate: IPayRate }>());
export const deletePayRate = createAction('[PayRates] deletePayRate', props<{ payRateId: number }>());
export const resetPayRates = createAction('[PayRates] resetPayRates');
