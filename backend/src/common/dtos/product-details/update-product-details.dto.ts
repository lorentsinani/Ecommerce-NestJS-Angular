import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class UpdateProductDetailsDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  origin: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  warranty: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  color: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  size: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  producer_id: number;
}
