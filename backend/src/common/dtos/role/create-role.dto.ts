import { IsEnum, IsNotEmpty } from 'class-validator';
import { UserRole } from '../../constants/enums/user-rol.enum';

export class CreateRoleDto {
  @IsNotEmpty()
  @IsEnum(UserRole)
  name: UserRole;
}
