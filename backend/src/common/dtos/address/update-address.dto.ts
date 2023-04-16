import { Length, IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { IsCustomEmail } from '../../decorators/email-format.decorator';

export class UpdateAddressDto {
  @Length(1, 255)
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  address_line1: string;

  @Length(1, 255)
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  address_line2: string;

  @Length(1, 100)
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  city: string;

  @Length(1, 50)
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  state: string;

  @Length(1, 50)
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  postal_code: string;

  @Length(1, 15)
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  country: string;

  @IsCustomEmail()
  @IsOptional()
  @IsNotEmpty()
  email: string;

  @Length(1, 20)
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  phone: string;

  @Length(1, 50)
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  first_name: string;

  @Length(1, 50)
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  last_name: string;
}
