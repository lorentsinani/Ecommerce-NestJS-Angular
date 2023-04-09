import { IsEnum, IsNotEmpty } from 'class-validator';
import { PermissionLevel } from '../../constants/enums/permission-level.enum';

export class CreateAdminDto {
  @IsNotEmpty()
  @IsEnum(PermissionLevel)
  permission_level: PermissionLevel;

  @IsNotEmpty()
  user_id: number;
}
