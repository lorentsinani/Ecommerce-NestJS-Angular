import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProducerFormComponent } from './admin-producer-form.component';

describe('AdminProducerFormComponent', () => {
  let component: AdminProducerFormComponent;
  let fixture: ComponentFixture<AdminProducerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProducerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProducerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
