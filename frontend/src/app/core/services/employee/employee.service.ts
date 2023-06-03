import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';

import { Order } from '../../interfaces/orders.interface';
import { Employee } from '../../interfaces/employee.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseService<Employee> {
  constructor(http: HttpClient) {
    super(http);
  }

  createEmployee(data: Employee): Observable<Employee> {
    return this.post(`employees`, data);
  }

  getAllEmployee(): Observable<Employee[]> {
    return this.getAll(`employees`);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.get(`employees/${id}`);
  }

  updateEmployee(id: number, data: Partial<Employee>): Observable<Employee> {
    return this.put(`employees/${id}`, data);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.delete(`employees/${id}`);
  }
}
