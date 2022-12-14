import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PayRateTableDataSource } from './pay-rate-table-datasource';
import {IPayRate} from "../models/IPayRate";

@Component({
  selector: 'app-pay-rate-table',
  templateUrl: './pay-rate-table.component.html',
  styleUrls: ['./pay-rate-table.component.less']
})
export class PayRateTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<IPayRate>;
  dataSource: PayRateTableDataSource;

  displayedColumns = ['id', 'caption', 'value', 'actions'];

  constructor() {
    this.dataSource = new PayRateTableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  delete(id: number): void {
    console.log(id);
  }
}
