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
      imgPath: '../../../assets/laptop.png',
    },
    {
      name: 'Joystick Pro',
      price: '$100.99',
      imgPath: '../../../assets/laptop.png',
    },
    {
      name: 'Smartphone 5s',
      price: '$100.99',
      imgPath: '../../../assets/laptop.png',
    },
  ];
}
