import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDataInformationComponent } from './profile-data-information.component';

describe('ProfileDataInformationComponent', () => {
  let component: ProfileDataInformationComponent;
  let fixture: ComponentFixture<ProfileDataInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDataInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDataInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
