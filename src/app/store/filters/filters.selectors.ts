import {AppState} from "../../app.state";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {filtersFeatureName, FilterState} from "./filters.states";

export const selectFiltersFeature = createFeatureSelector<FilterState>(filtersFeatureName);

export const selectFilters = createSelector(
  selectFiltersFeature,
  (state: FilterState) => state.container.filters
)

export const selectContainer = createSelector(
  selectFiltersFeature,
  (state: FilterState) => state.container
)

export const selectFiltersOpen = createSelector(
  selectFiltersFeature,
  (state: FilterState) => state.open
)
