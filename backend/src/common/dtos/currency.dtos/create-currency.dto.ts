import { IsString, IsNotEmpty, Length, IsNumber, IsBoolean, IsDate } from 'class-validator';

export class CreateCurrencyDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 3)
  code: string;

  @IsNumber()
  @IsNotEmpty()
  exchange_rate: number;

  @IsBoolean()
  @IsNotEmpty()
  is_base: boolean;
}
