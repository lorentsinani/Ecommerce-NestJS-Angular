import { IsNotEmpty, IsInt } from 'class-validator';

export class UpdateWishlistDto {
  @IsNotEmpty()
  @IsInt()
  customerId: number;

  @IsNotEmpty()
  @IsInt()
  productId: number;
}
