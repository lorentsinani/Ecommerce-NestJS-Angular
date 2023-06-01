import { IsOptional, IsNotEmpty, IsDecimal, IsNumber } from 'class-validator';

export class UpdateOrderItemDto {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  orderId: number;

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsNotEmpty()
  @IsDecimal()
  priceWithVat: number;

  @IsOptional()
  @IsNotEmpty()
  @IsDecimal()
  priceWithoutVat: number;

  @IsOptional()
  @IsDecimal()
  vat?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsDecimal()
  totalAmount: number;
}
