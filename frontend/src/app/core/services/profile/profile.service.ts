import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { User } from '../../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends BaseService<User> {
  private accessToken: string;

  constructor(http: HttpClient, private cookieService: CookieService) {
    super(http);
    this.setAuthorizationHeader();
  }

  getUserDetails(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/profile`, this.httpOptions).pipe(map(this.extractData), catchError(this.handleError));
  }

  updateUserDetails(user: User): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/profile`, user, this.httpOptions).pipe(map(this.extractData), catchError(this.handleError));
  }

  updateUserPassword(updatePasswordData: any): Observable<User> {
    return this.http
      .patch<User>(`${this.apiUrl}/profile/update-password`, updatePasswordData, this.httpOptions)
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  setAuthorizationHeader() {
    this.accessToken = this.cookieService.get('accessToken');
    if (this.accessToken) {
      this.httpOptions.headers.set('Authorization', `Bearer ${this.accessToken}`);
    }
  }
}
