import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';

import { Order } from '../../interfaces/orders.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends BaseService<Order> {
  constructor(http: HttpClient) {
    super(http);
  }

  createOrder(data: Order): Observable<Order> {
    return this.post(`orders`, data);
  }

  getAllOrders(): Observable<Order[]> {
    return this.getAll(`orders`);
  }

  getOrderById(id: number): Observable<Order> {
    return this.get(`orders/${id}`);
  }

  updateOrder(id: number, data: Partial<Order>): Observable<Order> {
    return this.put(`orders/${id}`, data);
  }

  deleteOrder(id: number): Observable<Order> {
    return this.delete(`orders/${id}`);
  }
}
