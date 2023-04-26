import { PermissionAction } from '../constants/enums/permission-action.enum';

export interface CaslPermission {
  action: PermissionAction;
  subject: string;
}
