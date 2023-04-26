import { Length, IsString, IsOptional, IsNotEmpty } from 'class-validator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class UpdateCategoryDto {
  @Length(1, 100)
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  category_name: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  category_desc: string;

  @Length(1, 255)
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  category_image_url: string;

  @IsNumberFormat()
  @IsOptional()
  @IsNotEmpty()
  parent_category_id: number;
}
