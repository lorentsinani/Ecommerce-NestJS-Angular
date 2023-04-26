import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminObjectsComponent } from './admin-objects.component';

describe('AdminObjectsComponent', () => {
  let component: AdminObjectsComponent;
  let fixture: ComponentFixture<AdminObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminObjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
