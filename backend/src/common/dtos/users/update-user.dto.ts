import { UserType } from './../../constants/enums/user-type.enum';
import { IsEnum, IsString, Length } from 'class-validator';

export class UpdateUserDto {
  @IsEnum(UserType)
  user_type?: UserType;

  @IsString()
  @Length(1, 50)
  first_name?: string;

  @IsString()
  @Length(1, 50)
  last_name?: string;

  @IsString()
  @Length(1, 100)
  email?: string;

  @IsString()
  @Length(1, 255)
  password?: string;

  @IsString()
  @Length(1, 50)
  country?: string;

  @IsString()
  @Length(1, 50)
  city?: string;

  birthdate?: Date;

  @IsString()
  @Length(1, 1)
  gender?: string;
}
