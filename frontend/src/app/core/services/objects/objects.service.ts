import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Objects } from '../../interfaces/object.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectsService extends BaseService<Objects> {
  constructor(http: HttpClient) {
    super(http);
  }

  getAllObjects(): Observable<Objects[]> {
    return this.getAll('objects');
  }
}
