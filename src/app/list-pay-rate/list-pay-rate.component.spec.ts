import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPayRateComponent } from './list-pay-rate.component';

describe('ListPayRateComponent', () => {
  let component: ListPayRateComponent;
  let fixture: ComponentFixture<ListPayRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPayRateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPayRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
