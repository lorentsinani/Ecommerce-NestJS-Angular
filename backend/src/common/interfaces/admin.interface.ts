import { PermissionLevel } from '../constants/enums/permission-level.enum';
import { IUser } from './user.interface';

export interface IAdmin {
  user_id: number;
  user: IUser;
  permission_level: PermissionLevel;
}
