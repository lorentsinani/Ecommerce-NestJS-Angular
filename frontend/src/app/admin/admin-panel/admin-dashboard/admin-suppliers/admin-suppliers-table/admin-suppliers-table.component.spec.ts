import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSuppliersTableComponent } from './admin-suppliers-table.component';

describe('AdminSuppliersTableComponent', () => {
  let component: AdminSuppliersTableComponent;
  let fixture: ComponentFixture<AdminSuppliersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSuppliersTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSuppliersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
