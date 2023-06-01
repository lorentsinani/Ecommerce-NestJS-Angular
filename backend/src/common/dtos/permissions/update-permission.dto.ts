import { IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { PermissionAction } from '../../constants/enums/permission-action.enum';

export class UpdatePermissionDto {
  @IsOptional()
  @IsNotEmpty()
  @IsEnum(PermissionAction)
  action: PermissionAction;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  objectId: number;
}
