import { IsString, IsNotEmpty, Length, IsBoolean, IsNumber } from 'class-validator';

export class CreateCurrencyDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 3)
  code: string;

  @IsNotEmpty()
  @IsNumber()
  exchangeRate: number;

  @IsBoolean()
  @IsNotEmpty()
  isBase: boolean;
}
