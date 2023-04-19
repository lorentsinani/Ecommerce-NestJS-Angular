import { IsDecimal, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateOrderItemDto {
  @IsNotEmpty()
  @IsNumber()
  order_id: number;

  @IsNotEmpty()
  @IsNumber()
  product_id: number;

  @IsNotEmpty()
  @IsNumber()
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
