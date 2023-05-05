import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSuppliersFormComponent } from './admin-suppliers-form.component';

describe('AdminSuppliersFormComponent', () => {
  let component: AdminSuppliersFormComponent;
  let fixture: ComponentFixture<AdminSuppliersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSuppliersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSuppliersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
