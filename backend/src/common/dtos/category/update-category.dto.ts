import { Length, IsString, IsOptional, IsNumber } from 'class-validator';

export class UpdateCategoryDto {
  @Length(1, 100)
  @IsString()
  @IsOptional()
  category_name: string;

  @IsString()
  @IsOptional()
  category_desc: string;

  @Length(1, 255)
  @IsString()
  @IsOptional()
  category_image_url: string;

  @IsNumber()
  @IsOptional()
  parent_category_id: number;
}
