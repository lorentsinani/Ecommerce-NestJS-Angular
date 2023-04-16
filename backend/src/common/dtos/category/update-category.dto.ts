import { Length, IsString, IsOptional, IsNumber, IsNotEmpty } from 'class-validator';

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

  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  parent_category_id: number;
}
