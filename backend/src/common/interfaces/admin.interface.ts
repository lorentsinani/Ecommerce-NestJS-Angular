import { PermissionLevel } from '../constants/enums/permission-level.enum';
import { IUser } from './user.interface';

export interface IAdmin {
  userId: number;
  user: IUser;
  permissionLevel: PermissionLevel;
}
