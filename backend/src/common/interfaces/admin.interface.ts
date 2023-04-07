import { PermissionLevel } from '../constants/enums/permission-level.enum';
import { IUser } from './user.interface';

export interface IAdmin {
  id: number;
  user: IUser;
  permission_level: PermissionLevel;
}
