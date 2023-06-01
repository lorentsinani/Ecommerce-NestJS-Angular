import { Injectable } from '@angular/core';
import { Suppliers } from '../../interfaces/supplier-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService extends BaseService<Suppliers> {
  constructor(http: HttpClient) {
    super(http);
  }

  createProducer(data: Suppliers): Observable<Suppliers> {
    return this.post(`supplier`, data);
  }

  getAllSuppliers(): Observable<Suppliers[]> {
    return this.getAll(`supplier`);
  }

  getSupplierById(id: number): Observable<Suppliers> {
    return this.get(`supplier/${id}`);
  }

  updateSupplier(id: number, data: Partial<Suppliers>): Observable<Suppliers> {
    return this.put(`supplier/${id}`, data);
  }

  deleteSupplier(id: number): Observable<Suppliers> {
    return this.delete(`supplier/${id}`);
  }
}
