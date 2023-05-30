import { Ability, AbilityBuilder, AbilityTuple } from '@casl/ability';
import { LoginCredentials } from './../../interfaces/login-credentials.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { User } from '../../interfaces/user.interface';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../../interfaces/authentication-response.interface';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
import { JwtPayload } from '../../interfaces/jwt-payload.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService<AuthenticationResponse> {
  constructor(http: HttpClient, private cookieService: CookieService) {
    super(http);
  }

  login(loginCredentials: LoginCredentials): Observable<AuthenticationResponse> {
    return this.post('auth/login', loginCredentials);
  }

  register(userData: User): Observable<AuthenticationResponse> {
    return this.post('auth/register', userData);
  }

  logout() {
    return this.post('auth/logout', {});
  }

  isUserAuthenticated(): boolean {
    const accessToken = this.getAccessToken();
    return accessToken !== undefined && accessToken !== '';
  }

  getUserRole(): string {
    const token = this.getDecodeToken();
    return token.user.role.name;
  }

  getUserName(): string {
    const token = this.getDecodeToken();
    return token.user.firstName;
  }

  getDecodeToken(): JwtPayload {
    return jwt_decode(this.getAccessToken());
  }

  getAccessToken(): string {
    return this.cookieService.get('accessToken');
  }
}
