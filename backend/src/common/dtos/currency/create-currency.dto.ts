import { IsString, IsNotEmpty, Length, IsBoolean } from 'class-validator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class CreateCurrencyDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 3)
  code: string;

  @IsNumberFormat()
  @IsNotEmpty()
  exchange_rate: number;

  @IsBoolean()
  @IsNotEmpty()
  is_base: boolean;
}
