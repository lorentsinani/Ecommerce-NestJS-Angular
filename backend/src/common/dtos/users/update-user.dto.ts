import { UserGender } from '../../constants/enums/user-gender.enum';
import { IsCustomEmail } from '../../decorators/email-format.decorator';
import { IsBoolean, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Length ,IsDateString } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  roleId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  firstName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  lastName: string;

  @IsOptional()
  @IsCustomEmail() // custom decorator
  email: string;

  @IsBoolean()
  @IsOptional()
  verified: boolean;

  @IsOptional()
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
  @IsDateString()
  birthdate: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @IsEnum(UserGender)
  gender: UserGender;
}
