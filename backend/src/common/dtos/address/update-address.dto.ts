import { Length, IsString, IsOptional, IsEmail } from "class-validator";

export class UpdateAddressDto {
  @Length(1, 255)
  @IsString()
  @IsOptional()
  address_line1: string;

  @Length(1, 255)
  @IsString()
  @IsOptional()
  address_line2: string;

  @Length(1, 100)
  @IsString()
  @IsOptional()
  city: string;

  @Length(1, 50)
  @IsString()
  @IsOptional()
  state: string;

  @Length(1, 50)
  @IsString()
  @IsOptional()
  postal_code: string;

  @Length(1, 15)
  @IsString()
  @IsOptional()
  country: string;

  @Length(1, 100)
  @IsEmail()
  @IsString()
  @IsOptional()
  email: string;

  @Length(1, 20)
  @IsString()
  @IsOptional()
  phone: string;

  @Length(1, 50)
  @IsString()
  @IsOptional()
  first_name: string;

  @Length(1, 50)
  @IsString()
  @IsOptional()
  last_name: string;
}
