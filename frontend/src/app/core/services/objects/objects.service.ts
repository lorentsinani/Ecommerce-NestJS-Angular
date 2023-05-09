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

  createObject(object: Objects): Observable<Objects> {
    return this.post('objects', object);
  }

  getAllObjects(): Observable<Objects[]> {
    return this.getAll('objects');
  }

  getObjectById(id: number): Observable<Objects> {
    return this.get(`objects/${id}`);
  }

  updateObject(id: number, object: Objects): Observable<Objects> {
    return this.patch(`objects/${id}`, object);
  }
}
