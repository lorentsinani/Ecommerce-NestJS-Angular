import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class ProductComponent {
  @Output() productsData: EventEmitter<any> = new EventEmitter<any>();
  noProductsFound: boolean = false;
  searchTerm: string;
  private productsSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public productsFetched: Observable<any> = this.productsSubject.asObservable();

  constructor(private productService: ProductService) {}

  onSearchSubmit() {
    if (typeof this.searchTerm !== 'string') {
      this.noProductsFound = true;
    }

    this.searchProducts(this.searchTerm);

    this.searchTerm = '';
  }

  searchProducts(searchTerm: string): void {
    this.productService.getProducts(searchTerm).subscribe({
      next: data => {
        this.productsFetched = data;
        this.productsData.emit(data);
      },
      error: error => {
        this.noProductsFound = true;
      }
    });
  }

  latestSearch = ['Smartphones', 'Laptops', 'Headphones'];
  products = [
    {
      name: 'Smartphones',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/smartphone.png',
      rating: '5.0',
      description:
        'Kufjet janë të pajisura me një lidhës universal Mini Jack 3.5 mm, kështu që ato mund të lidhen me shumë pajisje të ndryshme pa pasur nevojë për përshtatës.'
    },
    {
      name: 'Laptops',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/smartphone.png',
      rating: '5.0',
      description:
        'Kufjet janë të pajisura me një lidhës universal Mini Jack 3.5 mm, kështu që ato mund të lidhen me shumë pajisje të ndryshme pa pasur nevojë për përshtatës.'
    },
    {
      name: 'Joystick',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/joystick.png',
      rating: '5.0',
      description: ''
    },
    {
      name: 'Smart TV HD',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/smartphone.png',
      rating: '5.0',
      description:
        'Ofrojnë gjithashtu një mikrofon dhe sigurojnë rehatinë e përdorimit dhe rregullimit të pozicionit të mikrofonit sipas preferencave të përdoruesit.'
    },
    {
      name: 'Smart Watch',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/smartphone.png',
      rating: '5.0',
      description: ''
    },
    {
      name: 'Camera HD + Lens',
      originalPrice: '$39.99',
      onSalePrice: '$29.99',
      image: '../../../assets/smartphone.png',
      rating: '5.0',
      description: 'Kablloja e tyre është e gjatë 1 m.'
    }
  ];
}

export const products = [
  {
    name: 'Smartphones',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/smartphone.png',
    rating: '5.0',
    description:
      'Kufjet janë të pajisura me një lidhës universal Mini Jack 3.5 mm, kështu që ato mund të lidhen me shumë pajisje të ndryshme pa pasur nevojë për përshtatës.'
  },
  {
    name: 'Laptops',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/smartphone.png',
    rating: '5.0',
    description:
      'Kufjet janë të pajisura me një lidhës universal Mini Jack 3.5 mm, kështu që ato mund të lidhen me shumë pajisje të ndryshme pa pasur nevojë për përshtatës.'
  },
  {
    name: 'Joystick',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/joystick.png',
    rating: '5.0',
    description: ''
  },
  {
    name: 'Smart TV HD',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/smartphone.png',
    rating: '5.0',
    description:
      'Ofrojnë gjithashtu një mikrofon dhe sigurojnë rehatinë e përdorimit dhe rregullimit të pozicionit të mikrofonit sipas preferencave të përdoruesit.'
  },
  {
    name: 'Smart Watch',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/smartphone.png',
    rating: '5.0',
    description: ''
  },
  {
    name: 'Camera HD + Lens',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/smartphone.png',
    rating: '5.0',
    description: 'Kablloja e tyre është e gjatë 1 m.'
  },
  {
    name: 'Smartphones extra',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/smartphone.png',
    rating: '5.0',
    description:
      'Kufjet janë të pajisura me një lidhës universal Mini Jack 3.5 mm, kështu që ato mund të lidhen me shumë pajisje të ndryshme pa pasur nevojë për përshtatës.'
  },
  {
    name: 'Laptops extra',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/smartphone.png',
    rating: '5.0',
    description:
      'Kufjet janë të pajisura me një lidhës universal Mini Jack 3.5 mm, kështu që ato mund të lidhen me shumë pajisje të ndryshme pa pasur nevojë për përshtatës.'
  },
  {
    name: 'Joystick extra',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/joystick.png',
    rating: '5.0',
    description: ''
  },
  {
    name: 'Smart TV HD extra',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/smartphone.png',
    rating: '5.0',
    description:
      'Ofrojnë gjithashtu një mikrofon dhe sigurojnë rehatinë e përdorimit dhe rregullimit të pozicionit të mikrofonit sipas preferencave të përdoruesit.'
  },
  {
    name: 'Smart Watch extra',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/smartphone.png',
    rating: '5.0',
    description: ''
  },
  {
    name: 'Camera HD + Lens extra',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/smartphone.png',
    rating: '5.0',
    description: 'Kablloja e tyre është e gjatë 1 m.'
  },
  {
    name: 'Smartphones extra 3',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/smartphone.png',
    rating: '5.0',
    description:
      'Kufjet janë të pajisura me një lidhës universal Mini Jack 3.5 mm, kështu që ato mund të lidhen me shumë pajisje të ndryshme pa pasur nevojë për përshtatës.'
  },
  {
    name: 'Laptops extra 3',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/smartphone.png',
    rating: '5.0',
    description:
      'Kufjet janë të pajisura me një lidhës universal Mini Jack 3.5 mm, kështu që ato mund të lidhen me shumë pajisje të ndryshme pa pasur nevojë për përshtatës.'
  },
  {
    name: 'Joystick extra 3',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/joystick.png',
    rating: '5.0',
    description: ''
  },
  {
    name: 'Smart TV HD extra 3',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/smartphone.png',
    rating: '5.0',
    description:
      'Ofrojnë gjithashtu një mikrofon dhe sigurojnë rehatinë e përdorimit dhe rregullimit të pozicionit të mikrofonit sipas preferencave të përdoruesit.'
  },
  {
    name: 'Smart Watch extra 3',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/smartphone.png',
    rating: '5.0',
    description: ''
  },
  {
    name: 'Camera HD + Lens extra 3',
    originalPrice: '$39.99',
    onSalePrice: '$29.99',
    image: '../../../assets/smartphone.png',
    rating: '5.0',
    description: 'Kablloja e tyre është e gjatë 1 m.'
  }
];
