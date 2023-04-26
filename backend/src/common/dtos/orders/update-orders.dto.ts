import { IsString, IsNotEmpty, IsDecimal, IsOptional, MaxLength } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class UpdateOrdersDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  order_code: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  customer_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  order_comment: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  currency_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  employee_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  order_status_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  address_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsDateFormat()
  order_date: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsDecimal()
  total_amount_with_vat: number;

  @IsOptional()
  @IsNotEmpty()
  @IsDecimal()
  total_amount_without_vat: number;

  @IsOptional()
  @IsDecimal()
  vat?: number;
}
