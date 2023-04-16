import { IsString, IsNotEmpty, Length, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class UpdateCurrencyDto {
  @IsString()
  @Length(1, 3)
  @IsOptional()
  @IsNotEmpty()
  code: string;

  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  exchange_rate: number;

  @IsBoolean()
  @IsOptional()
  @IsNotEmpty()
  is_base: boolean;
}
