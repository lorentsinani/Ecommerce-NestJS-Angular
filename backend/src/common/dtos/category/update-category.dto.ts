import { Length, IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateCategoryDto {
  @Length(1, 100)
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  categoryName: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  categoryDesc: string;

  @Length(1, 255)
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  categoryImageUrl: string;
}
