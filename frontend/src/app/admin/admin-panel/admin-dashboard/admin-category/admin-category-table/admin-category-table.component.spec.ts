import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryTableComponent } from './admin-category-table.component';

describe('AdminCategoryTableComponent', () => {
  let component: AdminCategoryTableComponent;
  let fixture: ComponentFixture<AdminCategoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoryTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
