import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { PermissionLevel } from '../../constants/enums/permission-level.enum';

export class UpdateAdminDto {
  @IsOptional()
  @IsEnum(PermissionLevel)
  @IsNotEmpty()
  permission_level?: PermissionLevel;

  @IsOptional()
  @IsNotEmpty()
  user_id?: number;
}
