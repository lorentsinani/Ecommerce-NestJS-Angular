import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';
import { Category } from '../../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<Category> {
  constructor(http: HttpClient) {
    super(http);
  }

  createCategory(data: Category): Observable<Category> {
    return this.post(`category`, data);
  }

  getAllCategories(): Observable<Category[]> {
    return this.getAll(`category`);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.get(`category/${id}`);
  }

  updateCategory(id: number, data: Partial<Category>): Observable<Category> {
    return this.put(`category/${id}`, data);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.delete(`category/${id}`);
  }
}
