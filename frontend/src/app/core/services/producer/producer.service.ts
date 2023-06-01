import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';
import { Producer } from '../../interfaces/producer-interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProducerService extends BaseService<Producer> {
  constructor(http: HttpClient) {
    super(http);
  }

  createProducer(data: Producer): Observable<Producer> {
    return this.post(`producer`, data);
  }

  getAllProducers(): Observable<Producer[]> {
    return this.getAll(`producer`);
  }

  getProducerById(id: number): Observable<Producer> {
    return this.get(`producer/${id}`);
  }

  updateProducer(id: number, data: Partial<Producer>): Observable<Producer> {
    return this.put(`producer/${id}`, data);
  }

  deleteProducer(id: number): Observable<Producer> {
    return this.delete(`producer/${id}`);
  }
}
