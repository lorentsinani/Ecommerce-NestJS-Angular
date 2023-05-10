import { IsEnum } from 'class-validator';
import { UserRole } from '../../constants/enums/user-rol.enum';

export class UpdateRoleDto {
  @IsEnum(UserRole)
  name: UserRole;
}
