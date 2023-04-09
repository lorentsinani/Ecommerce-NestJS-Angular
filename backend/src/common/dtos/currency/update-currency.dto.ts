import { IsString, IsNotEmpty, Length, IsNumber, IsBoolean, IsDate, IsOptional } from 'class-validator';

export class UpdateCurrencyDto {
  @IsString()
  @Length(1, 3)
  @IsOptional()
  code: string;

  @IsNumber()
  @IsOptional()
  exchange_rate: number;

  @IsBoolean()
  @IsOptional()
  is_base: boolean;
}
