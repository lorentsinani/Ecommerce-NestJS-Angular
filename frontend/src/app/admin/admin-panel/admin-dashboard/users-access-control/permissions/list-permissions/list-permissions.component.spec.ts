import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPermissionsComponent } from './list-permissions.component';

describe('ListPermissionsComponent', () => {
  let component: ListPermissionsComponent;
  let fixture: ComponentFixture<ListPermissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPermissionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
