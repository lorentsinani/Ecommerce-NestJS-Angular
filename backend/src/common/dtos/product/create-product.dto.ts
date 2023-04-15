import { IsNotEmpty, IsDecimal, IsInt, IsOptional, MaxLength, IsNumber, IsString } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  product_name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  product_code: string;

  @IsNotEmpty()
  @IsNumber()
  supplier_id: number;

  @IsNotEmpty()
  @IsNumber()
  category_id: number;

  @IsNotEmpty()
  @IsDateFormat()
  released_date: Date;

  @IsNotEmpty()
  @IsDecimal()
  price_with_vat: number;

  @IsNotEmpty()
  @IsDecimal()
  price_without_vat: number;

  @IsOptional()
  @IsDecimal()
  vat?: number;

  @IsNotEmpty()
  @IsInt()
  availability_in_stock: number;

  @IsOptional()
  @IsDecimal()
  discount?: number;

  @IsNotEmpty()
  @IsNumber()
  product_details_id: number;
}
