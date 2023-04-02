import { Component } from '@angular/core';

@Component({
  selector: 'app-flash-sale',
  templateUrl: './flash-sale.component.html',
  styleUrls: ['./flash-sale.component.scss'],
})
export class FlashSaleComponent {
  flashSales = [
    {
      name: 'Wireless Headphone',
      price: 20.99,
      discount: 10.0,
      finalPrice() {
        return this.price - this.price * (this.discount / 100);
      },
    },
    {
      name: 'Air Purifier',
      price: 20.99,
      discount: 10.0,
      finalPrice() {
        return this.price - this.price * (this.discount / 100);
      },
    },
    {
      name: 'Bluetooth Printer',
      price: 20.99,
      discount: 10.0,
      finalPrice() {
        return this.price - this.price * (this.discount / 100);
      },
    },
  ];
}
