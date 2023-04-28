import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddressComponent } from './admin-address.component';

describe('AdminAddressComponent', () => {
  let component: AdminAddressComponent;
  let fixture: ComponentFixture<AdminAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
