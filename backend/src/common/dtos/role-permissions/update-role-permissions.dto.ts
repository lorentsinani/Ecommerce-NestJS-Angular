import { IsOptional, IsNotEmpty, IsInt } from 'class-validator';

export class UpdateRolePermissionsDto {
  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  roleId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  permissionId: number;
}
