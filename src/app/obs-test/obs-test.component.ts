import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {BehaviorSubject, Observable, startWith, switchMap} from "rxjs";
import {selectFiltersOpen} from "../store/filters/filters.selectors";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-obs-test',
  templateUrl: './obs-test.component.html',
  styleUrls: ['./obs-test.component.less']
})
export class ObsTestComponent implements OnInit {

  openToggleSubject$: BehaviorSubject<boolean> | undefined;

  constructor(private store: Store) {
    this.store.select(selectFiltersOpen).subscribe(isOpen => {
      this.openToggleSubject$ = new BehaviorSubject<boolean>(isOpen);
    });
  }

  ngOnInit(): void {
  }

  onClick() {
    this.openToggleSubject$?.next(!this.openToggleSubject$.value);
  }
}
