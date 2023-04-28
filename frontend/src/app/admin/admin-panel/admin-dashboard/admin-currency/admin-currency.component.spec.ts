import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCurrencyComponent } from './admin-currency.component';

describe('AdminCurrencyComponent', () => {
  let component: AdminCurrencyComponent;
  let fixture: ComponentFixture<AdminCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCurrencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
