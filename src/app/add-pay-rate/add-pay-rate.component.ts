import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PayRatesService} from "../services/pay-rates.service";
import {IPayRate} from "../models/IPayRate";

@Component({
  selector: 'app-add-pay-rate',
  templateUrl: './add-pay-rate.component.html',
  styleUrls: ['./add-pay-rate.component.less']
})
export class AddPayRateComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private readonly payRatesService: PayRatesService) {
    this.formGroup = new FormGroup({
      id: new FormControl<number>(0, [Validators.required, Validators.min(1)]),
      caption: new FormControl<string | null>(null, Validators.required),
      value: new FormControl<number | null>(null, Validators.required)
    })
  }

  ngOnInit(): void {
    this.payRatesService.BehaviorSubject$.subscribe((payRates) => {
      console.log(payRates);
      console.log(payRates.length);
    });
  }

  onSubmit() {
    this.payRatesService.push(
      this.formGroup.value as IPayRate
    );
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
