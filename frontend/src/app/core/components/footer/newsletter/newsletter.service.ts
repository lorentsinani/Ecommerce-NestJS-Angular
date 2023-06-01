import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseService } from '../../../services/base/base.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService extends BaseService<any> {
  constructor(http: HttpClient) {
    super(http);
  }

  joinUserForNewsletter(email: string): Observable<any> {
    return this.post('newsletter', { email });
  }
}
