import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPayRateComponent } from './add-pay-rate.component';

describe('AddPayRateComponent', () => {
  let component: AddPayRateComponent;
  let fixture: ComponentFixture<AddPayRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPayRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPayRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
