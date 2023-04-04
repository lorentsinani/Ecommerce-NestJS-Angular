import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  products = [
    {
      name: 'USB Speaker Portable',
      price: '$100.99',
      imgPath: '../../../assets/speaker.png',
    },
    {
      name: 'Joystick Pro',
      price: '$100.99',
      imgPath: '../../../assets/joystick.png',
    },
    {
      name: 'Iphone 14 Pro',
      price: '$999.99',
      imgPath: '../../../assets/smartphone.png',
    },
  ];
}
