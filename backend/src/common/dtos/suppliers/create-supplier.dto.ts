import { IsNotEmpty, IsString, Length } from 'class-validator';
import { IsCustomEmail } from '../../decorators/email-format.decorator';

export class CreateSupplierDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  companyName: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 100)
  contactName: string;

  @IsString()
  contactTitle?: string;

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
  postalCode: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  country: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  phoneNumber: string;

  @IsString()
  @Length(1, 20)
  faxNumber?: string;

  @IsCustomEmail()
  email: string;
}
