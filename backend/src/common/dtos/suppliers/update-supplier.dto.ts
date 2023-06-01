import { IsString, Length, IsOptional, IsNotEmpty } from 'class-validator';
import { IsCustomEmail } from '../../decorators/email-format.decorator';

export class UpdateSupplierDto {
  @IsString()
  @Length(1, 100)
  @IsOptional()
  @IsNotEmpty()
  companyName: string;

  @IsString()
  @Length(1, 100)
  @IsOptional()
  contactName: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  contactTitle: string;

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
  postalCode: string;

  @IsString()
  @Length(1, 50)
  @IsOptional()
  @IsNotEmpty()
  country: string;

  @IsString()
  @Length(1, 20)
  @IsOptional()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @Length(1, 20)
  @IsOptional()
  @IsNotEmpty()
  faxNumber: string;

  @IsCustomEmail()
  @IsOptional()
  email: string;
}
