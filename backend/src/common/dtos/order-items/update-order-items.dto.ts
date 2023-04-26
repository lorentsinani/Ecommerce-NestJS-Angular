import { IsOptional, IsNotEmpty, IsDecimal } from 'class-validator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class UpdateOrderItemDto {
  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  order_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  product_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  quantity: number;

  @IsOptional()
  @IsNotEmpty()
  @IsDecimal()
  price_with_vat: number;

  @IsOptional()
  @IsNotEmpty()
  @IsDecimal()
  price_without_vat: number;

  @IsOptional()
  @IsDecimal()
  vat?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsDecimal()
  total_amount: number;
}
