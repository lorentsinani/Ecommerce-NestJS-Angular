import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  latestSearch = ['Smartphones', 'Laptops', 'Headphones'];
  products = [
    {
      name: 'Smartphones',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/smartphone.png',
      rating: '5.0',
      description:
        'Kufjet janë të pajisura me një lidhës universal Mini Jack 3.5 mm, kështu që ato mund të lidhen me shumë pajisje të ndryshme pa pasur nevojë për përshtatës.',
    },
    {
      name: 'Laptops',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/smartphone.png',
      rating: '5.0',
      description:
        'Kufjet janë të pajisura me një lidhës universal Mini Jack 3.5 mm, kështu që ato mund të lidhen me shumë pajisje të ndryshme pa pasur nevojë për përshtatës.',
    },
    {
      name: 'Joystick',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/joystick.png',
      rating: '5.0',
      description: '',
    },
    {
      name: 'Smart TV HD',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/smartphone.png',
      rating: '5.0',
      description:
        'Ofrojnë gjithashtu një mikrofon dhe sigurojnë rehatinë e përdorimit dhe rregullimit të pozicionit të mikrofonit sipas preferencave të përdoruesit.',
    },
    {
      name: 'Smart Watch',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/smartphone.png',
      rating: '5.0',
      description: '',
    },
    {
      name: 'Camera HD + Lens',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/smartphone.png',
      rating: '5.0',
      description: 'Kablloja e tyre është e gjatë 1 m.',
    },
  ];
}
