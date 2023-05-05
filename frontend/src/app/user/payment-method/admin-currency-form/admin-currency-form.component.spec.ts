import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCurrencyFormComponent } from './admin-currency-form.component';

describe('AdminCurrencyFormComponent', () => {
  let component: AdminCurrencyFormComponent;
  let fixture: ComponentFixture<AdminCurrencyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCurrencyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCurrencyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
