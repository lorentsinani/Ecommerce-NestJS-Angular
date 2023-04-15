import { IsNotEmpty, IsString, IsNumber, IsEmail, IsOptional } from 'class-validator';

export class UpdateProducerDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  country: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  established_year: number;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  contact_email: string;
}
