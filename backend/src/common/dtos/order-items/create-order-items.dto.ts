import { IsDecimal, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderItemDto {
  @IsNotEmpty()
  @IsNumber()
  orderId: number;

  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsNotEmpty()
  @IsDecimal()
  priceWithVat: number;

  @IsNotEmpty()
  @IsDecimal()
  priceWithoutVat: number;

  @IsNotEmpty()
  @IsDecimal()
  vat?: number;

  @IsNotEmpty()
  @IsDecimal()
  totalAmount: number;
}
