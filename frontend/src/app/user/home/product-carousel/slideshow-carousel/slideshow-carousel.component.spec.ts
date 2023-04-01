import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshowCarouselComponent } from './slideshow-carousel.component';

describe('SlideshowCarouselComponent', () => {
  let component: SlideshowCarouselComponent;
  let fixture: ComponentFixture<SlideshowCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideshowCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideshowCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
