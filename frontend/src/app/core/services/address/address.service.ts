import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';

import { Order } from '../../interfaces/orders.interface';
import { Address } from '../../interfaces/address.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AddressService extends BaseService<Address> {
  constructor(http: HttpClient) {
    super(http);
  }

  createAddress(data: Address): Observable<Address> {
    return this.post(`address`, data);
  }

  getAllAddresses(): Observable<Address[]> {
    return this.getAll(`address`);
  }

  getAddressById(id: number): Observable<Address> {
    return this.get(`address/${id}`);
  }

  updateAddress(id: number, data: Partial<Address>): Observable<Address> {
    return this.put(`address/${id}`, data);
  }

  deleteAddress(id: number): Observable<Address> {
    return this.delete(`address/${id}`);
  }
}
