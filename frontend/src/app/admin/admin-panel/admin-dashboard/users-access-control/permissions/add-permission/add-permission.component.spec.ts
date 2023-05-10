import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPermissionComponent } from './add-permission.component';

describe('AddPermissionComponent', () => {
  let component: AddPermissionComponent;
  let fixture: ComponentFixture<AddPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPermissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
