import { LoginCredentials } from './../../interfaces/login-credentials.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { User } from '../../interfaces/user.interface';
import { Observable, catchError, map } from 'rxjs';
import { AuthenticationResponse } from '../../interfaces/authentication-response.interface';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
import { JwtPayload } from '../../interfaces/jwt-payload.interface';
import { AuthStateService } from '../../state/auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService<AuthenticationResponse> {
  constructor(http: HttpClient, private cookieService: CookieService) {
    super(http);
    this.setAuthorizationHeader();
  }

  login(loginCredentials: LoginCredentials): Observable<AuthenticationResponse> {
    return this.post('auth/login', loginCredentials);
  }

  register(userData: User): Observable<AuthenticationResponse> {
    return this.post('auth/register', userData);
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/auth/logout`, this.httpOptions).pipe(map(this.extractData), catchError(this.handleError));
  }

  deleteTokenFromCookie() {
    this.cookieService.delete('accessToken', '/', undefined, true);
  }

  isUserAuthenticated(): boolean {
    const accessToken = this.getAccessToken();
    return accessToken !== undefined && accessToken !== '';
  }

  getUserRole(): string {
    const token = this.getDecodeToken();
    return token?.user?.role?.name;
  }

  getUserName(): string {
    const token = this.getDecodeToken();
    return token?.user?.firstName;
  }

  getDecodeToken(): JwtPayload {
    return jwt_decode(this.getAccessToken());
  }

  getAccessToken(): string {
    return this.cookieService.get('accessToken');
  }

  setAuthorizationHeader() {
    const accessToken: string = this.getAccessToken();
    if (accessToken) {
      this.httpOptions.headers.set('Authorization', `Bearer ${accessToken}`);
    }
  }
}
