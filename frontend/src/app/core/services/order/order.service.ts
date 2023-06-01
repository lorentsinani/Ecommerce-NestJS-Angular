import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Delivery } from '../../interfaces/delivery.interface';
import { Observable } from 'rxjs';
import { Order } from '../../interfaces/order.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<Order> {
  constructor(http: HttpClient) {
    super(http);
  }
  createOrder(data: Order): Observable<Order> {
    return this.post('orders', data);
  }
  getAllOrders(): Observable<Order[]> {
    return this.getAll(`orders`);
  }
  getOrderById(id: number): Observable<Order> {
    return this.get(`orders/${id}`);
  }
  getOrderByCode(code: string): Observable<Order> {
    return this.get(`orders/code/${code}`);
  }
  updateOrder(id: number, data: Partial<Order>): Observable<Order> {
    return this.put(`orders/${id}`, data);
  }
  deleteOrder(id: number): Observable<Order> {
    return this.delete(`orders/${id}`);
  }
}
