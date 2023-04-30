import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProducerTableComponent } from './admin-producer-table.component';

describe('AdminProducerTableComponent', () => {
  let component: AdminProducerTableComponent;
  let fixture: ComponentFixture<AdminProducerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProducerTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProducerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
