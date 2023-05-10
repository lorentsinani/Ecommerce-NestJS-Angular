import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment-dev';

export abstract class BaseService<T> {
  protected apiUrl = environment.apiUrl;

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(protected http: HttpClient) {}

  protected handleError(response: HttpErrorResponse): Observable<never> {
    const errorResponse = {
      statusCode: response.status,
      apiUrl: response.url,
      message: response.error.message,
      error: response
    };

    return throwError(() => errorResponse);
  }

  protected extractData(res: any) {
    const body = res;
    return body || {};
  }

  protected getAll(endpoint: string, query?: any): Observable<T[]> {
    const options = {
      params: query
    };
    return this.http.get<T[]>(`${this.apiUrl}/${endpoint}`, options).pipe(map(this.extractData), catchError(this.handleError));
  }

  protected get(endpoint: string, params?: any): Observable<T> {
    const options = {
      params: params
    };
    return this.http.get<T>(`${this.apiUrl}/${endpoint}`, options).pipe(map(this.extractData), catchError(this.handleError));
  }

  protected post(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${endpoint}`, data, this.httpOptions).pipe(map(this.extractData), catchError(this.handleError));
  }

  protected patch(endpoint: string, data: any): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}/${endpoint}`, data, this.httpOptions).pipe(map(this.extractData), catchError(this.handleError));
  }

  protected put(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${endpoint}`, data, this.httpOptions).pipe(map(this.extractData), catchError(this.handleError));
  }

  protected delete(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${endpoint}`, this.httpOptions).pipe(map(this.extractData), catchError(this.handleError));
  }
}
