import { IsNotEmpty, IsString, IsEmail, IsOptional } from 'class-validator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

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
  @IsNumberFormat()
  establishedYear: number;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  contactEmail: string;
}
