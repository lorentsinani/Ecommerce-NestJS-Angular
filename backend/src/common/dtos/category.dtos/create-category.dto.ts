import { Length, IsString, IsNotEmpty, IsDate, IsNumber } from 'class-validator';

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

  @IsNumber()
  parent_category_id: number;

  @IsDate()
  created_at: Date;

  @IsDate()
  updated_at: Date;
}
