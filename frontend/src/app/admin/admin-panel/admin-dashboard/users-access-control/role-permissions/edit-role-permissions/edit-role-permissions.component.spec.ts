import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRolePermissionsComponent } from './edit-role-permissions.component';

describe('EditRolePermissionsComponent', () => {
  let component: EditRolePermissionsComponent;
  let fixture: ComponentFixture<EditRolePermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRolePermissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRolePermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
