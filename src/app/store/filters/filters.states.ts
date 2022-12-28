import {IFilter} from "../../models/IFilter";
import {IContainer} from "../../models/IContainer";

export const filtersFeatureName = 'filters';

export interface FilterState {
  container: IContainer;
  open: boolean;
}

export const initialFiltersState: FilterState = {
  container: {
    id: '1',
    name: 'Filters',
    filters: [{
      id: 'payRateMin',
      value: 0
    }, {
      id: 'payRateMax',
      value: 100
    }],
  },
  open: false
}
