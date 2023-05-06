import { Length, IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @Length(1, 100)
  @IsString()
  @IsNotEmpty()
  categoryName: string;

  @IsString()
  categoryDesc: string;

  categoryImage: Express.Multer.File | any;
}
