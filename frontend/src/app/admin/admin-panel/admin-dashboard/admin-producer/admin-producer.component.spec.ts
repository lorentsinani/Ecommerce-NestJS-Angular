import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProducerComponent } from './admin-producer.component';

describe('AdminProducerComponent', () => {
  let component: AdminProducerComponent;
  let fixture: ComponentFixture<AdminProducerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProducerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
