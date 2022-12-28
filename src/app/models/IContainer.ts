import {IFilter} from "./IFilter";

export interface IContainer {
  id: string;
  name: string;
  filters: IFilter[];
}
