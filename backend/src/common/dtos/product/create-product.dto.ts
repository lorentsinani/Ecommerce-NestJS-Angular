import { IsNotEmpty, IsDecimal, IsInt, IsOptional, MaxLength, IsString } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  productName: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  productCode: string;

  @IsNotEmpty()
  @IsInt()
  supplierId: number;

  @IsNotEmpty()
  @IsInt()
  categoryId: number;

  @IsNotEmpty()
  @IsDateFormat()
  releasedDate: Date;

  @IsNotEmpty()
  @IsDecimal()
  priceWithVat: number;

  @IsNotEmpty()
  @IsDecimal()
  priceWithoutVat: number;

  @IsOptional()
  @IsDecimal()
  vat?: number;

  @IsNotEmpty()
  @IsInt()
  availabilityInStock: number;

  @IsOptional()
  @IsDecimal()
  discount?: number;

  @IsNotEmpty()
  @IsInt()
  productDetailsId: number;
}
