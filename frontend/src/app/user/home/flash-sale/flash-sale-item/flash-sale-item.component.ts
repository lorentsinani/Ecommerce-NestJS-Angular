import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flash-sale-item',
  templateUrl: './flash-sale-item.component.html',
  styleUrls: ['./flash-sale-item.component.scss'],
})
export class FlashSaleItemComponent {
  @Input() product: any;
}
