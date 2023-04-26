import { IsDecimal, IsNotEmpty, IsOptional } from 'class-validator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class CreateOrderItemDto {
  @IsNotEmpty()
  @IsNumberFormat()
  order_id: number;

  @IsNotEmpty()
  @IsNumberFormat()
  product_id: number;

  @IsNotEmpty()
  @IsNumberFormat()
  quantity: number;

  @IsNotEmpty()
  @IsDecimal()
  price_with_vat: number;

  @IsNotEmpty()
  @IsDecimal()
  price_without_vat: number;

  @IsOptional()
  @IsDecimal()
  vat: number;

  @IsNotEmpty()
  @IsDecimal()
  total_amount: number;
}
