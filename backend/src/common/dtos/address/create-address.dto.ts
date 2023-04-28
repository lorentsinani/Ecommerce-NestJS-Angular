import { IsNotEmpty, IsString, Length } from 'class-validator';
import { IsCustomEmail } from '../../decorators/email-format.decorator';

export class CreateAddressDto {
  @Length(1, 255)
  @IsString()
  addressLine1: string;

  @Length(1, 255)
  @IsString()
  addressLine2: string;

  @Length(1, 100)
  @IsString()
  city: string;

  @Length(1, 50)
  @IsString()
  state: string;

  @Length(1, 50)
  @IsString()
  postalCode: string;

  @Length(1, 15)
  @IsString()
  country: string;

  @IsCustomEmail()
  email: string;

  @Length(1, 20)
  @IsString()
  phone: string;

  @Length(1, 50)
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Length(1, 50)
  @IsString()
  @IsNotEmpty()
  lastName: string;
}
