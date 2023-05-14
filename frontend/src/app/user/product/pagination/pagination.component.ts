import { ProductComponent } from './../product.component';
import { Component, OnInit } from '@angular/core';
import { products } from '../product.component';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  productsFetched: any;
  constructor(private productService: ProductComponent) {}
  ngOnInit() {
    this.productService.productsFetched.subscribe((data: any) => {
      this.productsFetched = data;
    });
  }
  currentPage = 1;
  itemsPerPage = 6;
  products = products;
}
