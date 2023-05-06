import { LoginCredentials } from './../../interfaces/login-credentials.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { User } from '../../interfaces/user.interface';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../../interfaces/authentication-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService<AuthenticationResponse> {
  constructor(http: HttpClient) {
    super(http);
  }

  login(loginCredentials: LoginCredentials): Observable<AuthenticationResponse> {
    return this.post('auth/login', loginCredentials);
  }

  register(userData: User) {
    return this.post('auth/register', userData);
  }

  logout() {
    return this.post('auth/logout', {});
  }
}
