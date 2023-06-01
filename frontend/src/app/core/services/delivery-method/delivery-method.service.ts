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

  createDeliveryMethod(data: DeliveryMethod): Observable<DeliveryMethod> {
    return this.post(`delivery-method`, data);
  }

  getAllDeliveriesMethod(): Observable<DeliveryMethod[]> {
    return this.getAll(`delivery-method`);
  }

  getDeliveryMethodById(id: number): Observable<DeliveryMethod> {
    return this.get(`delivery-method/${id}`);
  }

  updateDeliveryMethod(id: number, data: Partial<DeliveryMethod>): Observable<DeliveryMethod> {
    return this.put(`delivery-method/${id}`, data);
  }

  deleteDeliveryMethod(id: number): Observable<DeliveryMethod> {
    return this.delete(`delivery-method/${id}`);
  }
}
