import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Permission } from '../../interfaces/permission.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { PermissionAction } from '../../constants/enums/permission-action.enum';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService extends BaseService<Permission> {
  constructor(http: HttpClient) {
    super(http);
  }

  getAllPermissions(): Observable<Permission[]> {
    return this.getAll('permissions');
  }

  getAllPermissionActions(): Observable<Partial<Permission[]>> {
    return this.http.get<PermissionAction[]>(`${this.apiUrl}/permissions/actions`).pipe(map(this.extractData), catchError(this.handleError));
  }
}
