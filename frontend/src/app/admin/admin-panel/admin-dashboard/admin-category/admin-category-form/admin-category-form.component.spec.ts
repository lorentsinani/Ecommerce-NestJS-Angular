import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryFormComponent } from './admin-category-form.component';

describe('AdminCategoryFormComponent', () => {
  let component: AdminCategoryFormComponent;
  let fixture: ComponentFixture<AdminCategoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
