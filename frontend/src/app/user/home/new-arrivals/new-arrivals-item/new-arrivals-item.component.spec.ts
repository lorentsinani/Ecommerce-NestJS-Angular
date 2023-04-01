import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArrivalsItemComponent } from './new-arrivals-item.component';

describe('NewArrivalsItemComponent', () => {
  let component: NewArrivalsItemComponent;
  let fixture: ComponentFixture<NewArrivalsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArrivalsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewArrivalsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
