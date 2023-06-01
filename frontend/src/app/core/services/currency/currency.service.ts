import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';
import { Currency } from '../../interfaces/currency.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CurrencyService extends BaseService<Currency> {
  constructor(http: HttpClient) {
    super(http);
  }

  createCurrency(data: Currency): Observable<Currency> {
    return this.post(`currency`, data);
  }

  getAllCurrencies(): Observable<Currency[]> {
    return this.getAll(`currency`);
  }

  getCurrencyById(id: number): Observable<Currency> {
    return this.get(`currency/${id}`);
  }

  updateCurrency(id: number, data: Partial<Currency>): Observable<Currency> {
    return this.put(`currency/${id}`, data);
  }

  deleteCurrency(id: number): Observable<Currency> {
    return this.delete(`currency/${id}`);
  }
}
