import { IsString, Length, IsOptional, IsNotEmpty } from 'class-validator';
import { IsCustomEmail } from '../../decorators/email-format.decorator';

export class UpdateSupplierDto {
  @IsString()
  @Length(1, 100)
  @IsOptional()
  @IsNotEmpty()
  company_name: string;

  @IsString()
  @Length(1, 100)
  @IsOptional()
  contact_name: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  contact_title: string;

  @IsString()
  @Length(1, 100)
  @IsOptional()
  @IsNotEmpty()
  address: string;

  @IsString()
  @Length(1, 50)
  @IsOptional()
  @IsNotEmpty()
  city: string;

  @IsString()
  @Length(1, 50)
  @IsOptional()
  @IsNotEmpty()
  region: string;

  @IsString()
  @Length(1, 20)
  @IsOptional()
  @IsNotEmpty()
  postal_code: string;

  @IsString()
  @Length(1, 50)
  @IsOptional()
  @IsNotEmpty()
  country: string;

  @IsString()
  @Length(1, 20)
  @IsOptional()
  @IsNotEmpty()
  phone_number: string;

  @IsString()
  @Length(1, 20)
  @IsOptional()
  @IsNotEmpty()
  fax_number: string;

  @IsCustomEmail()
  @IsOptional()
  email: string;
}
