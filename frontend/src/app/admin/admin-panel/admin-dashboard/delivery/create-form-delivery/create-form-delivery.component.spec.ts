import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFormDeliveryComponent } from './create-form-delivery.component';

describe('CreateFormDeliveryComponent', () => {
  let component: CreateFormDeliveryComponent;
  let fixture: ComponentFixture<CreateFormDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateFormDeliveryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFormDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
