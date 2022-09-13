import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPayRateComponent } from './counter-pay-rate.component';

describe('CounterPayRateComponent', () => {
  let component: CounterPayRateComponent;
  let fixture: ComponentFixture<CounterPayRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterPayRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterPayRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
