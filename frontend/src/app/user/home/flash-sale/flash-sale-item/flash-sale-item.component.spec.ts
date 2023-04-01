import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashSaleItemComponent } from './flash-sale-item.component';

describe('FlashSaleItemComponent', () => {
  let component: FlashSaleItemComponent;
  let fixture: ComponentFixture<FlashSaleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashSaleItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashSaleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
