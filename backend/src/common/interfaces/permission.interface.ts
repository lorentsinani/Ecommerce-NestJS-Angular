import { PermissionAction } from '../constants/enums/permission-action.enum';
import { IObject } from './object.interface';

export interface IPermission {
  id: number;
  action: PermissionAction;
  objectId: number;
  object: IObject;
}
