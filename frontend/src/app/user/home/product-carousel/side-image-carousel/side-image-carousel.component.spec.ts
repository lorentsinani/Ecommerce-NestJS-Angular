import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideImageCarouselComponent } from './side-image-carousel.component';

describe('SideImageCarouselComponent', () => {
  let component: SideImageCarouselComponent;
  let fixture: ComponentFixture<SideImageCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideImageCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideImageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
