import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormDeliveryMethodComponent } from './create-form-delivery-method.component';

describe('CreateFormDeliveryMethodComponent', () => {
  let component: CreateFormDeliveryMethodComponent;
  let fixture: ComponentFixture<CreateFormDeliveryMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFormDeliveryMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateFormDeliveryMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
