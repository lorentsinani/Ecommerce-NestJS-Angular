import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryMethodComponent } from './delivery-method.component';

describe('DeliveryMethodComponent', () => {
  let component: DeliveryMethodComponent;
  let fixture: ComponentFixture<DeliveryMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
