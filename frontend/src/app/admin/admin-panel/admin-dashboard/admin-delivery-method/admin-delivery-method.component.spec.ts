import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeliveryMethodComponent } from './admin-delivery-method.component';

describe('AdminDeliveryMethodComponent', () => {
  let component: AdminDeliveryMethodComponent;
  let fixture: ComponentFixture<AdminDeliveryMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeliveryMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeliveryMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
