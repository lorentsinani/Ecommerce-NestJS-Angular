import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeliveryComponent } from './admin-delivery.component';

describe('AdminDeliveryComponent', () => {
  let component: AdminDeliveryComponent;
  let fixture: ComponentFixture<AdminDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
