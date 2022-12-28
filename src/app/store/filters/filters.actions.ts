import {createAction, props} from "@ngrx/store";
import {IFilter} from "../../models/IFilter";

export const loadFilters = createAction(
  '[Filters] loadFilters',
  props<{ filters: IFilter[] }>()
);

export const toggleFilters = createAction(
  '[Filters] toggleFilters'
);
