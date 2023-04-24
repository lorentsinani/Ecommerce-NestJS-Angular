import { IsNotEmpty, IsDecimal, IsInt, IsOptional, MaxLength, IsString } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class UpdateProductDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  product_name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  product_code: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  supplier_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  category_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsDateFormat()
  released_date: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsDecimal()
  price_with_vat: number;

  @IsOptional()
  @IsNotEmpty()
  @IsDecimal()
  price_without_vat: number;

  @IsOptional()
  @IsDecimal()
  vat?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  availability_in_stock: number;

  @IsOptional()
  @IsOptional()
  @IsDecimal()
  discount?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  product_details_id: number;
}
