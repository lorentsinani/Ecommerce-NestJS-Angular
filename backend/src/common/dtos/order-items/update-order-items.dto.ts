import { IsOptional, IsNotEmpty, IsNumber, IsDecimal } from 'class-validator';

export class UpdateOrderItemDto {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  order_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  product_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
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
