import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BaseService } from '../base/base.service';

import { Observable } from 'rxjs';
import { DeliveryMethod } from '../../interfaces/delivery-method.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DeliveryMethodService extends BaseService<DeliveryMethod> {
  constructor(http: HttpClient) {
    super(http);
  }

  createDelivery(data: DeliveryMethod): Observable<DeliveryMethod> {
    return this.post(`delivery-method`, data);
  }

  getAllDeliveries(): Observable<DeliveryMethod[]> {
    return this.getAll(`delivery-method`);
  }

  getDeliveryById(id: number): Observable<DeliveryMethod> {
    return this.get(`delivery-method/${id}`);
  }

  updateDelivery(id: number, data: Partial<DeliveryMethod>): Observable<DeliveryMethod> {
    return this.put(`delivery-method/${id}`, data);
  }

  deleteDelivery(id: number): Observable<DeliveryMethod> {
    return this.delete(`delivery-method/${id}`);
  }
}
