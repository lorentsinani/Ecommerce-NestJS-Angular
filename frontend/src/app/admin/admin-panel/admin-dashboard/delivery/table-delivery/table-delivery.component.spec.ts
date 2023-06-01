import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDeliveryComponent } from './table-delivery.component';

describe('TableDeliveryComponent', () => {
  let component: TableDeliveryComponent;
  let fixture: ComponentFixture<TableDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
