import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../../core/services/base/base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<any> {
  constructor(http: HttpClient) {
    super(http);
  }

  getProducts(searchTerm: string): Observable<any> {
    return this.post('product/search', { q: searchTerm });
  }
}
