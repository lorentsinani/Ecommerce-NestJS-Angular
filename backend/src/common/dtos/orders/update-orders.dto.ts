import { IsString, IsNotEmpty, IsNumber, IsDecimal, IsOptional, MaxLength, IsEnum } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';
import { OrderStatus } from '../../constants/enums/orders-status.enum';

export class UpdateOrdersDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  order_code: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  customer_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  order_comment: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  currency_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  employee_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  order_status_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
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
