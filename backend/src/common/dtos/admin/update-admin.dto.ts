import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { PermissionLevel } from '../../constants/enums/permission-level.enum';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class UpdateAdminDto {
  @IsOptional()
  @IsEnum(PermissionLevel)
  @IsNotEmpty()
  permissionLevel: PermissionLevel;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  userId: number;
}
