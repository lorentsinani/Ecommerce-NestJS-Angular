import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';
import { Product } from '../../interfaces/product.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Product> {
  constructor(http: HttpClient) {
    super(http);
  }

  createProduct(data: Product): Observable<Product> {
    return this.post(`products`, data);
  }

  getAllProducts(): Observable<Product[]> {
    return this.getAll(`products`);
  }

  getProductById(id: number): Observable<Product> {
    return this.get(`products/${id}`);
  }

  updateProduct(id: number, data: Partial<Product>): Observable<Product> {
    return this.put(`products/${id}`, data);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.delete(`products/${id}`);
  }
}