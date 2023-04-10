import { IsString, IsEnum, Length, IsOptional } from 'class-validator';
import { UserType } from '../../constants/enums/user-type.enum';
import { IsCustomEmail } from '../../decorators/email-format.decorator';

export class UpdateSupplierDto {
  @IsString()
  @Length(1, 100)
  @IsOptional()
  company_name: string;

  @IsString()
  @Length(1, 100)
  @IsOptional()
  contact_name: string;

  @IsEnum(UserType)
  @IsOptional()
  contact_title?: UserType;

  @IsString()
  @Length(1, 100)
  @IsOptional()
  address: string;

  @IsString()
  @Length(1, 50)
  @IsOptional()
  city: string;

  @IsString()
  @Length(1, 50)
  @IsOptional()
  region?: string;

  @IsString()
  @Length(1, 20)
  @IsOptional()
  postal_code: string;

  @IsString()
  @Length(1, 50)
  @IsOptional()
  country: string;

  @IsString()
  @Length(1, 20)
  @IsOptional()
  phone_number: string;

  @IsString()
  @Length(1, 20)
  @IsOptional()
  fax_number?: string;

  @IsCustomEmail()
  @IsOptional()
  email: string;
}
