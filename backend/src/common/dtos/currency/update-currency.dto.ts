import { IsString, IsNotEmpty, Length, IsBoolean, IsOptional } from 'class-validator';

export class UpdateCurrencyDto {
  @IsString()
  @Length(1, 3)
  @IsOptional()
  @IsNotEmpty()
  code: string;

  @IsOptional()
  @IsNotEmpty()
  exchangeRate: number;

  @IsBoolean()
  @IsOptional()
  @IsNotEmpty()
  isBase: boolean;
}
