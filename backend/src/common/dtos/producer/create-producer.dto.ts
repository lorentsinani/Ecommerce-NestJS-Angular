import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class CreateProducerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsNumberFormat()
  establishedYear: number;

  @IsNotEmpty()
  @IsEmail()
  contactEmail: string;
}
