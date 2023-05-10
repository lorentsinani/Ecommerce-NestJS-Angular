import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRolePermissionComponent } from './add-role-permission.component';

describe('AddRolePermissionComponent', () => {
  let component: AddRolePermissionComponent;
  let fixture: ComponentFixture<AddRolePermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRolePermissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRolePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
