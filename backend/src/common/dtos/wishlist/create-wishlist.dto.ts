import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWishlistDto {
  @IsNotEmpty()
  @IsNumber()
  customer_id: number;

  @IsNotEmpty()
  @IsNumber()
  product_id: number;
}
