import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAccessControlComponent } from './users-access-control.component';

describe('UsersAccessControlComponent', () => {
  let component: UsersAccessControlComponent;
  let fixture: ComponentFixture<UsersAccessControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAccessControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersAccessControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
