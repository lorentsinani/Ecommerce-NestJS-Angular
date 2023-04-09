import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { PermissionLevel } from '../../constants/enums/permission-level.enum';

export class UpdateAdminDto {
  @IsOptional()
  @IsEnum(PermissionLevel)
  permission_level?: PermissionLevel;

  @IsOptional()
  user_id?: number;
}
