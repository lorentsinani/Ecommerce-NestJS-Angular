import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateWishlistDto {
  @IsNotEmpty()
  @IsNumber()
  customer_id: number;

  @IsNotEmpty()
  @IsNumber()
  product_id: number;
}
