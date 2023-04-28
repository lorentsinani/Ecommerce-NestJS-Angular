import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderItemsComponent } from './admin-order-items.component';

describe('AdminOrderItemsComponent', () => {
  let component: AdminOrderItemsComponent;
  let fixture: ComponentFixture<AdminOrderItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrderItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOrderItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
