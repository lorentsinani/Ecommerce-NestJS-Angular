import { IsNotEmpty, IsString } from 'class-validator';

export class ProductSearchDto {
  @IsNotEmpty()
  @IsString()
  q: string;
}
