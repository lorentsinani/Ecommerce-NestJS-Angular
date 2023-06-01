import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditObjectComponent } from './edit-object.component';

describe('EditObjectComponent', () => {
  let component: EditObjectComponent;
  let fixture: ComponentFixture<EditObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
