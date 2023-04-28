import { IsEnum, IsNotEmpty } from 'class-validator';
import { PermissionLevel } from '../../constants/enums/permission-level.enum';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class CreateAdminDto {
  @IsNotEmpty()
  @IsEnum(PermissionLevel)
  permissionLevel: PermissionLevel;

  @IsNotEmpty()
  @IsNumberFormat()
  userId: number;
}
