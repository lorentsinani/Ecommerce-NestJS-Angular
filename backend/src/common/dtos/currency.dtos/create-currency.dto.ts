import { IsString, IsNotEmpty, Length, IsNumber, IsBoolean, IsDate } from "class-validator";
import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

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

  @IsDate()
  @IsNotEmpty()
  created_at: Date;

  @IsDate()
  @IsNotEmpty()
  updated_at: Date;
}
