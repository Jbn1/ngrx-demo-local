import {createReducer, on} from "@ngrx/store";
import {initialFiltersState} from "./filters.states";
import {loadFilters, toggleFilters} from "./filters.actions";

const _filtersReducer = createReducer(
  initialFiltersState,

  on(loadFilters, (state, {filters}) => {
    return {
      ...state,
      container: {
        ...state.container,
        filters: [...filters]
      }
    }
  }),

  on(toggleFilters, (state) => {
    return {
      ...state,
      open: !state.open
    }
  })
);

export function filtersReducer(state: any | undefined, action: any) {
  return _filtersReducer(state, action);
}
