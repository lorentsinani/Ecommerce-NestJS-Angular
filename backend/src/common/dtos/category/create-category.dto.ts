import { Length, IsString, IsNotEmpty } from 'class-validator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class CreateCategoryDto {
  @Length(1, 100)
  @IsString()
  @IsNotEmpty()
  category_name: string;

  @IsString()
  category_desc: string;

  @Length(1, 255)
  @IsString()
  category_image_url: string;

  @IsNumberFormat()
  parent_category_id: number;
}
