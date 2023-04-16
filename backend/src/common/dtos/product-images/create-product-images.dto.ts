import { IsNotEmpty, IsNumber, IsObject, IsString } from 'class-validator';
import { Product } from '../../../domain/entities/product.entity';

export class CreateProductImageDto {
  @IsNotEmpty()
  @IsNumber()
  product_id: number;

  @IsNotEmpty()
  @IsObject()
  product: Product;

  @IsNotEmpty()
  @IsString()
  image_url: string;
}
