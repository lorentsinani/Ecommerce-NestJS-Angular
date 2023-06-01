import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateProductImageDto {
  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  productId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  imageUrl: string;
}
