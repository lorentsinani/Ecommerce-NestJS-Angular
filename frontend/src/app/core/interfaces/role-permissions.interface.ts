import { Permission } from './permission.interface';
import { Role } from './role.interface';

export interface RolePermissions {
  id?: number;
  roleId: number;
  role?: Role;
  permissionId: number;
  permission?: Permission;
}
