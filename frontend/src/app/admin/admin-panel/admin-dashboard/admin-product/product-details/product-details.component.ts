import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from '../../../../../core/interfaces/product.interface';
import { ProductService } from '../../../../../core/services/product/product.service';
import { Role } from '../../../../../core/interfaces/role.interface';
import { ServerErrorResponse } from '../../../../../core/interfaces/http-error-response.interface';
import { Suppliers } from '../../../../../core/interfaces/supplier-interface';
import { Category } from '../../../../../core/interfaces/category.interface';

@Component({
  selector: 'app-products-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  form: FormGroup;
  products: Product[];
  suppliers: Suppliers[];
  categories: Category[]
  roles: Role[];
  showTable: boolean = false;
  isCreated: boolean;
  isNotCreated: boolean;

  constructor(
    private productsService: ProductService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getAllProducts();

    this.form.get('priceWithoutVat').valueChanges.subscribe(() => {
      this.calculatePriceWithVat();
    });

    this.form.get('vat').valueChanges.subscribe(() => {
      this.calculatePriceWithVat();
    });
  }

  createForm() {
    this.form = this.fb.group({
      productCode: ['', Validators.required],
      supplierId: ['', Validators.required],
      categoryId: ['', Validators.required],
      releasedDate: ['', Validators.required],
      priceWithVat: ['', Validators.required],
      priceWithoutVat: ['', Validators.required],
      vat: [''],
      availabilityInStock: ['', Validators.required],
      discount: [''],
      discountExpirationDate: [''],
      productDetailsId: ['', Validators.required]
    });

    this.form.get('priceWithVat').disable();

    this.form.get('priceWithoutVat')?.valueChanges.subscribe((value) => {
      const vat = this.form.get('vat')?.value || 0;
      const priceWithVat = value * (1 + vat / 100);
      this.form.patchValue({ priceWithVat: priceWithVat.toFixed(2) }, { emitEvent: false });
    });

    this.form.get('priceWithoutVat')?.valueChanges.subscribe((value) => {
      const vat = this.form.get('vat')?.value || 0;
      const priceWithVat = value * (1 + vat / 100);
      this.form.patchValue({ priceWithVat: priceWithVat.toFixed(2) }, { emitEvent: false });
    });
  }

  calculatePriceWithVat() {
    const priceWithoutVat = this.form.get('priceWithoutVat').value;
    const vat = this.form.get('vat').value;
  
    const priceWithVat = priceWithoutVat + (priceWithoutVat * vat / 100);
  
    this.form.get('priceWithVat').patchValue(priceWithVat);
  }

  onCreate() {
    if (this.form.invalid) {
      return;
    }
    
    const product = this.form.getRawValue();
    this.createProduct(product);
    this.form.reset();
  }

  createProduct(product: Product) {
    this.productsService.createProduct(product).subscribe({
      next: (createProduct: Product) => {
        this.isCreated = true;
      },
      error: (error: ServerErrorResponse) => {
        this.isNotCreated = true;
        console.log(error);
      }
    });
  }

  toggleTable() {
    this.showTable = !this.showTable;
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    });
  }
}
