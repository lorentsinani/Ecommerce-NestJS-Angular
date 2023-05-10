import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Permissions } from '../../interfaces/permissions.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { PermissionAction } from '../../constants/enums/permission-action.enum';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService extends BaseService<Permissions> {
  constructor(http: HttpClient) {
    super(http);
  }

  createPermission(permission: Permissions): Observable<Permissions> {
    return this.post(`permissions`, permission);
  }

  getAllPermissions(): Observable<Permissions[]> {
    return this.getAll('permissions');
  }

  getAllPermissionsByObject(objectId: number): Observable<Permissions[]> {
    return this.getAll(`permissions/object/${objectId}`);
  }

  getAllPermissionsWithObjects(): Observable<Permissions[]> {
    return this.getAll('permissions/objects');
  }

  getPermissionById(id: number): Observable<Permissions> {
    return this.get(`permissions/${id}`);
  }

  getAllPermissionActions(): Observable<Partial<Permissions[]>> {
    return this.http.get<PermissionAction[]>(`${this.apiUrl}/permissions/actions`).pipe(map(this.extractData), catchError(this.handleError));
  }

  updatePermission(id: number, permission: Permissions): Observable<Permissions> {
    return this.patch(`permissions/${id}`, permission);
  }

  deletePermission(id: number): Observable<Permissions> {
    return this.delete(`permissions/${id}`);
  }
}
