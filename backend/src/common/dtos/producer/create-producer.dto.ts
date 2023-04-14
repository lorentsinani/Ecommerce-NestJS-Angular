import { IsNotEmpty, IsString, IsNumber, IsEmail } from 'class-validator';

export class CreateProducerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsNumber()
  established_year: number;

  @IsNotEmpty()
  @IsEmail()
  contact_email: string;
}
