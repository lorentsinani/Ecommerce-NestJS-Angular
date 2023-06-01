import { IsNotEmpty, IsInt } from 'class-validator';

export class CreateRolePermissionsDto {
  @IsNotEmpty()
  @IsInt()
  roleId: number;

  @IsNotEmpty()
  @IsInt()
  permissionId: number;
}
