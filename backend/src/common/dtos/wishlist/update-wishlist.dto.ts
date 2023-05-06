import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateWishlistDto {
  @IsNotEmpty()
  @IsNumber()
  customerId: number;

  @IsNotEmpty()
  @IsNumber()
  productId: number;
}
