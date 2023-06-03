import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';

import { OrdersStatus } from '../../interfaces/order-status.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OrdersStatusService extends BaseService<OrdersStatus> {
  constructor(http: HttpClient) {
    super(http);
  }

  createOrderStatus(data: OrdersStatus): Observable<OrdersStatus> {
    return this.post(`orders-status`, data);
  }

  getAllOrdersStatus(): Observable<OrdersStatus[]> {
    return this.getAll(`orders-status`);
  }

  getOrderStatusById(id: number): Observable<OrdersStatus> {
    return this.get(`orders-status/${id}`);
  }

  updateOrderStatus(id: number, data: Partial<OrdersStatus>): Observable<OrdersStatus> {
    return this.put(`orders-status/${id}`, data);
  }

  deleteOrderStatus(id: number): Observable<OrdersStatus> {
    return this.delete(`orders-status/${id}`);
  }
}
