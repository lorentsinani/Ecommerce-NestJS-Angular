import { IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';
import { UserType } from '../../constants/enums/user-type.enum';
import { IsCustomEmail } from '../../decorators/email-format.decorator';
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

  @IsCustomEmail()
  @IsNotEmpty()
  @Length(1, 100)
  email: string;
}
