import { Component } from '@angular/core';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss'],
})
export class ProductCategoryComponent {
  categories = [
    'Computer & Laptop',
    'Mobile & Table',
    'Camera',
    'TV & Smart Box',
    'Home Appliance',
    'Accessories',
    'Other Categories',
  ];
}
