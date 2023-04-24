import { IsNotEmpty, IsString, MaxLength } from 'class-validator'; // Added import
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class CreateProductDetailsDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  origin: string;

  @IsNotEmpty()
  @IsNumberFormat()
  warranty: number;

  @IsNotEmpty()
  @MaxLength(100)
  color: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  size: string;

  @IsNotEmpty()
  @IsNumberFormat()
  producer_id: number;
}
