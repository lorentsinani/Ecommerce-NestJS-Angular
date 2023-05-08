import { PermissionAction } from '../constants/enums/permission-action.enum';
import { Objects } from './object.interface';

export interface Permission {
  id?: number;
  action: PermissionAction;
  objectId: number;
  object?: Objects;
}
