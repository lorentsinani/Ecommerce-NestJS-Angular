import { IsNotEmpty, IsString } from 'class-validator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class CreateProductImageDto {
  @IsNotEmpty()
  @IsNumberFormat()
  product_id: number;

  @IsNotEmpty()
  @IsString()
  image_url: string;
}
