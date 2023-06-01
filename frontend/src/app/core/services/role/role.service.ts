import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { Role } from '../../interfaces/role.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends BaseService<Role> {
  constructor(http: HttpClient) {
    super(http);
  }

  createRole(role: Role): Observable<Role> {
    return this.post('role', role);
  }

  getAllRoles(): Observable<Role[]> {
    return this.getAll('role');
  }

  getRoleById(id: number): Observable<Role> {
    return this.get(`role/${id}`);
  }

  updateRole(id: number, role: Role): Observable<Role> {
    return this.patch(`role/${id}`, role);
  }

  deleteRole(id: number): Observable<Role> {
    return this.delete(`role/${id}`);
  }
}
