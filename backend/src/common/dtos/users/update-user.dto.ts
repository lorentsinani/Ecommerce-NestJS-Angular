import { UserGender } from '../../constants/enums/user-gender.enum';
import { IsDateFormat } from '../../decorators/date-format.decorator';
import { IsCustomEmail } from '../../decorators/email-format.decorator';
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  role_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  first_name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  last_name: string;

  @IsCustomEmail() // custom decorator
  email: string;

  password: string; // No decorator needed because of the middleware check

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  country: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  city: string;

  @IsOptional()
  @IsNotEmpty()
  @IsDateFormat()
  birthdate: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @IsEnum(UserGender)
  gender: UserGender;
}
