import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { BaseService } from '../base/base.service';
import { User } from '../../interfaces/user.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService<User> {
  constructor(http: HttpClient) {
    super(http);
  }

  createUser(data: User): Observable<User> {
    return this.post('users', data);
  }

  getAllUsers(): Observable<User[]> {
    return this.getAll('users');
  }

  getUserById(id: number): Observable<User> {
    return this.get(`users/${id}`);
  }

  updateUser(id: number, data: Partial<User>): Observable<User> {
    return this.patch(`users/${id}`, data);
  }
  deleteUser(id: number): Observable<User> {
    return this.delete(`users/${id}`);
  }
}