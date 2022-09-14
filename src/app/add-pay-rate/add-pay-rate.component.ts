import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {addOrUpdatePayRate} from "../store/pay-rates.actions";

@Component({
  selector: 'app-add-pay-rate',
  templateUrl: './add-pay-rate.component.html',
  styleUrls: ['./add-pay-rate.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPayRateComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private store: Store) {
    this.formGroup = new FormGroup({
      id: new FormControl<number>(0, [Validators.required, Validators.min(1)]),
      caption: new FormControl<string | null>(null, Validators.required),
      value: new FormControl<number | null>(null, Validators.required)
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.formGroup.value);
    this.store.dispatch(addOrUpdatePayRate({payRate: this.formGroup.value}));
  }

  get idCtrl() {
    return this.formGroup.get('id') as FormControl;
  }

  get captionCtrl() {
    return this.formGroup.get('caption') as FormControl;
  }

  get valueCtrl() {
    return this.formGroup.get('value') as FormControl;
  }
}
