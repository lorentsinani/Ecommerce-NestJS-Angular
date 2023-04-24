import { IsString, IsNotEmpty, Length, IsDecimal, IsOptional } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class CreateOrdersDto {
  @IsString()
  @IsNotEmpty()
  @Length(10)
  order_code: string;

  @IsNotEmpty()
  @IsNumberFormat()
  customer_id: number;

  @IsString()
  @IsNotEmpty()
  @Length(255)
  order_comment: string;

  @IsNotEmpty()
  @IsNumberFormat()
  currency_id: number;

  @IsNotEmpty()
  @IsNumberFormat()
  employee_id: number;

  @IsNotEmpty()
  @IsNumberFormat()
  order_status_id: number;

  @IsNotEmpty()
  @IsNumberFormat()
  address_id: number;

  @IsDateFormat()
  order_date: Date;

  @IsNotEmpty()
  @IsDecimal()
  total_amount_with_vat: number;

  @IsNotEmpty()
  @IsDecimal()
  total_amount_without_vat: number;

  @IsOptional()
  @IsDecimal()
  vat?: number;
}
