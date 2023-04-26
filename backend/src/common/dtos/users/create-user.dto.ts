import { IsEnum, IsInt, IsNotEmpty, IsString, Length } from 'class-validator';
import { UserGender } from '../../constants/enums/user-gender.enum';
import { IsDateFormat } from '../../decorators/date-format.decorator';
import { IsCustomEmail } from '../../decorators/email-format.decorator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsInt()
  role_id: number;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  first_name: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  last_name: string;

  @IsCustomEmail() // custom decorator
  email: string;

  password: string; // No decorator needed because of the middleware check

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  country: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  city: string;

  @IsDateFormat()
  birthdate: Date;

  @IsNotEmpty()
  @IsString()
  @IsEnum(UserGender)
  gender: UserGender;
}
