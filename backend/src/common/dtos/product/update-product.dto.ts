import { IsNotEmpty, IsDecimal, IsInt, IsOptional, MaxLength, IsString } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';

export class UpdateProductDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  productName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  productCode: string;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  supplierId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  categoryId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsDateFormat()
  releasedDate: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsDecimal()
  priceWithVat: number;

  @IsOptional()
  @IsNotEmpty()
  @IsDecimal()
  priceWithoutVat: number;

  @IsOptional()
  @IsDecimal()
  vat?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  availabilityInStock: number;

  @IsOptional()
  @IsOptional()
  @IsDecimal()
  discount?: number;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  productDetailsId: number;
}
