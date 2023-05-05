import { Injectable } from '@angular/core';
import { Currency } from './../../interfaces/currency-interface';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base/base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService extends BaseService<Currency> {
  constructor(http: HttpClient) {
    super(http);
  }

  createCurrency(currency: Currency): Observable<Currency> {
    return this.post(`currency`, currency);
  }

  getCurrencyById(id: number): Observable<Currency> {
    return this.get(`currency${id}`);
  }

  getAllCurrencies(): Observable<Currency[]> {
    return this.getAll(`currency`);
  }

  updateCurrency(id: number, currency: Currency) {
    return this.put(`currency/${id}`, currency);
  }

  deleteCurrency(id: number) {
    return this.delete(`currency/${id}`);
  }
}
