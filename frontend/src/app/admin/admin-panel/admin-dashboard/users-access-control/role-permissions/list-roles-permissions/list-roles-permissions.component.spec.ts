import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRolesPermissionsComponent } from './list-roles-permissions.component';

describe('ListRolesPermissionsComponent', () => {
  let component: ListRolesPermissionsComponent;
  let fixture: ComponentFixture<ListRolesPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRolesPermissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRolesPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
