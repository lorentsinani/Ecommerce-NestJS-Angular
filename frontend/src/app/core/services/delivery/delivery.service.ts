import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Delivery } from '../../interfaces/delivery.interface';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DeliveryService extends BaseService<Delivery> {
  constructor(http: HttpClient) {
    super(http);
  }

  createDelivery(data: Delivery): Observable<Delivery> {
    return this.post(`delivery`, data);
  }

  getAllDeliveries(): Observable<Delivery[]> {
    return this.getAll(`delivery`);
  }

  getDeliveryById(id: number): Observable<Delivery> {
    return this.get(`delivery/${id}`);
  }

  updateDelivery(id: number, data: Partial<Delivery>): Observable<Delivery> {
    return this.put(`delivery/${id}`, data);
  }

  deleteDelivery(id: number): Observable<Delivery> {
    return this.delete(`delivery/${id}`);
  }
}
