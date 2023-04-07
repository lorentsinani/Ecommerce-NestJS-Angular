import { IsDate, IsEmail, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { UserType } from '../../constants/enums/user-type.enum';
export class CreateSupplierDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  company_name: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  contact_name: string;

  @IsEnum(UserType)
  contact_title?: UserType;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  address: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  city: string;

  @IsString()
  @Length(1, 50)
  region?: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  postal_code: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  country: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  phone_number: string;

  @IsString()
  @Length(1, 20)
  fax_number?: string;

  @IsEmail()
  @IsNotEmpty()
  @Length(1, 100)
  email: string;

  @IsNotEmpty()
  @IsDate()
  created_At: Date;

  @IsNotEmpty()
  @IsDate()
  updated_At: Date;
}
