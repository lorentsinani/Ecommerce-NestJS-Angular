import { Component } from '@angular/core';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss'],
})
export class NewArrivalsComponent {
  arrivals = [
    {
      name: 'SmartPhone 5G',
      price: 299.0,
      rate: 5.0,
    },
    {
      name: 'USB Speaker Portable',
      price: 29.0,
      rate: 4.9,
    },
    {
      name: 'Smart TV',
      price: 399.0,
      rate: 5.0,
    },
  ];
}
