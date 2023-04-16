import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductImageDto {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  product_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  image_url: string;
}
