import { IsString, IsNotEmpty, Length, IsNumber, IsDecimal, IsOptional, IsEnum } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';
import { OrderStatus } from '../../constants/enums/orders-status.enum';

export class CreateOrdersDto {
  @IsString()
  @IsNotEmpty()
  @Length(10)
  order_code: string;

  @IsNotEmpty()
  @IsNumber()
  customer_id: number;

  @IsString()
  @IsNotEmpty()
  @Length(255)
  order_comment: string;

  @IsNotEmpty()
  @IsNumber()
  currency_id: number;

  @IsNotEmpty()
  @IsNumber()
  employee_id: number;

  @IsNotEmpty()
  @IsEnum(OrderStatus)
  order_status: OrderStatus;

  @IsNotEmpty()
  @IsNumber()
  order_status_id: number;

  @IsNotEmpty()
  @IsNumber()
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
