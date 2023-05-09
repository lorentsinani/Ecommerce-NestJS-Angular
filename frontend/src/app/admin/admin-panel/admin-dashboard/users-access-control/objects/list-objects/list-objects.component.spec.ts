import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListObjectsComponent } from './list-objects.component';

describe('ListObjectsComponent', () => {
  let component: ListObjectsComponent;
  let fixture: ComponentFixture<ListObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListObjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
