import { IsEnum, IsNotEmpty } from 'class-validator';
import { PermissionLevel } from '../../constants/enums/permission-level.enum';
import { IUser } from '../../interfaces/user.interface';

export class CreateAdminDto {
  @IsNotEmpty()
  user: IUser;

  @IsEnum(PermissionLevel)
  permission_level: PermissionLevel;
}