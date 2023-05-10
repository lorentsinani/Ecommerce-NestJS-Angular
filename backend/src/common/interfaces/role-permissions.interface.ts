import { IPermission } from "./permission.interface";
import { IRole } from "./role.interface";

export interface IRolePermissions {
  id: number;
  roleId: number;
  role: IRole;
  permissionId: number;
  permission: IPermission;
}
