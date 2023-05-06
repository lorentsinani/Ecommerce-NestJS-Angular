import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductImageDto {
  @IsNotEmpty()
  @IsInt()
  productId: number;

  @IsNotEmpty()
  @IsString()
  imageUrl: string;
}
