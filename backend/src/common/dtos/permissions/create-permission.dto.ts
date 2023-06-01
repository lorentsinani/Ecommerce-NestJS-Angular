import { IsEnum, IsInt, IsNotEmpty, IsNumber } from 'class-validator';
import { PermissionAction } from '../../constants/enums/permission-action.enum';

export class CreatePermissionDto {
  @IsNotEmpty()
  @IsEnum(PermissionAction)
  action: PermissionAction;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  objectId: number;
}
