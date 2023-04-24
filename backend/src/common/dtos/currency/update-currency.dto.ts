import { IsString, IsNotEmpty, Length, IsBoolean, IsOptional } from 'class-validator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class UpdateCurrencyDto {
  @IsString()
  @Length(1, 3)
  @IsOptional()
  @IsNotEmpty()
  code: string;

  @IsNumberFormat()
  @IsOptional()
  @IsNotEmpty()
  exchange_rate: number;

  @IsBoolean()
  @IsOptional()
  @IsNotEmpty()
  is_base: boolean;
}
