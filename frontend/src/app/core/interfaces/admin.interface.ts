import { User } from './user.interface';
import { PermissionLevel } from '../constants/enums/permission-level.enum';

export interface Admin {
  userId: number;
  user: User;
  permissionLevel: PermissionLevel;
}
