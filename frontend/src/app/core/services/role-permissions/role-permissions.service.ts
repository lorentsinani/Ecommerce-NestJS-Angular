import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { RolePermissions } from '../../interfaces/role-permissions.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolePermissionsService extends BaseService<RolePermissions> {
  constructor(http: HttpClient) {
    super(http);
  }
  createRolePermission(rolePermission: RolePermissions): Observable<RolePermissions> {
    return this.post('role-permissions', rolePermission);
  }

  getAllRolePermissions(): Observable<RolePermissions[]> {
    return this.getAll('role-permissions');
  }

  getRolePermissionById(id: number): Observable<RolePermissions> {
    return this.get(`role-permissions/${id}`);
  }

  update(id: number, rolePermission: RolePermissions): Observable<RolePermissions> {
    return this.patch('role-permissions', rolePermission);
  }

  deleteRolePermission(id: number): Observable<RolePermissions> {
    return this.delete(`role-permissions/${id}`);
  }
}
