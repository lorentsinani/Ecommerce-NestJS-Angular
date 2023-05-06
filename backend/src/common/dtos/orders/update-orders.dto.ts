import { IsString, IsNotEmpty, IsDecimal, IsOptional, MaxLength, IsInt } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';

export class UpdateOrdersDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  orderCode: string;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  customerId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  orderComment: string;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  currencyId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  employeeId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  orderStatusId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
  addressId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsDateFormat()
  orderDate: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsDecimal()
  totalAmountWithVat: number;

  @IsOptional()
  @IsNotEmpty()
  @IsDecimal()
  totalAmountWithoutVat: number;

  @IsOptional()
  @IsDecimal()
  vat?: number;
}
