import { UserType } from './../../constants/enums/user-type.enum';
import { IsEnum, IsString, Length, IsNotEmpty, IsDate, IsOptional } from 'class-validator';

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

  @IsOptional()
  @IsString()
  @Length(1, 100)
  email: string;

  @IsOptional()
  @IsString()
  @Length(1, 255)
  password: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  country: string;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  city: string;

  @IsOptional()
  @IsNotEmpty()
  @IsDate()
  birthdate?: Date;

  @IsOptional()
  @IsString()
  @Length(1, 1)
  gender: string;
}
