import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class UpdateProductImageDto {
  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  product_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  image_url: string;
}
