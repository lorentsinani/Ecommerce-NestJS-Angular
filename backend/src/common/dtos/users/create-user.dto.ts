import { IsDate, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { UserType } from '../../constants/enums/user-type.enum';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEnum(UserType)
  user_type: UserType;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  first_name: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  last_name: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 100)
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 255)
  password: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  country: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  city: string;

  @IsNotEmpty()
  @IsDate()
  birthdate: Date;

  @IsNotEmpty()
  @IsString()
  @Length(1, 1)
  gender: string;
}
