import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideImageCarouselItemComponent } from './side-image-carousel-item.component';

describe('SideImageCarouselItemComponent', () => {
  let component: SideImageCarouselItemComponent;
  let fixture: ComponentFixture<SideImageCarouselItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideImageCarouselItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideImageCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
