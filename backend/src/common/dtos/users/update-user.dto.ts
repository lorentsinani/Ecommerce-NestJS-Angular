import { UserGender } from '../../constants/enums/user-gender.enum';
import { IsDateFormat } from '../../decorators/date-format.decorator';
import { IsCustomEmail } from '../../decorators/email-format.decorator';
import { UserType } from './../../constants/enums/user-type.enum';
import { IsEnum, IsOptional, IsString, Length } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsEnum(UserType)
  user_type: UserType;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  first_name: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  last_name: string;

  @IsCustomEmail() // custom decorator
  email: string;

  password: string; // No decorator needed because of the middleware check

  @IsOptional()
  @IsString()
  @Length(1, 50)
  country: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  city: string;

  @IsOptional()
  @IsDateFormat()
  birthdate: Date;

  @IsOptional()
  @IsString()
  @IsEnum(UserGender)
  gender: UserGender;
}
