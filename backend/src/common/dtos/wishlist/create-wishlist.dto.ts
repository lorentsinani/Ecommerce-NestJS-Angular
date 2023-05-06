import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateWishlistDto {
  @IsNotEmpty()
  @IsInt()
  customerId: number;

  @IsNotEmpty()
  @IsInt()
  productId: number;
}
