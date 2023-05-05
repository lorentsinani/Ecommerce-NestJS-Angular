import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCurrencyTableComponent } from './admin-currency-table.component';

describe('AdminCurrencyTableComponent', () => {
  let component: AdminCurrencyTableComponent;
  let fixture: ComponentFixture<AdminCurrencyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCurrencyTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCurrencyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
