import { Length, IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @Length(1, 100)
  @IsString()
  @IsNotEmpty()
  categoryName: string;

  @IsString()
  categoryDesc: string;

  @Length(1, 255)
  @IsString()
  categoryImage: string | Express.Multer.File;
}
