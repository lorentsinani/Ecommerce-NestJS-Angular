import { IsString, IsNotEmpty, Length, IsDecimal, IsOptional, IsInt } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';

export class CreateOrdersDto {
  @IsString()
  @IsNotEmpty()
  @Length(10)
  orderCode: string;

  @IsNotEmpty()
  @IsInt()
  customerId: number;

  @IsString()
  @IsNotEmpty()
  @Length(255)
  orderComment: string;

  @IsNotEmpty()
  @IsInt()
  currencyId: number;

  @IsNotEmpty()
  @IsInt()
  employeeId: number;

  @IsNotEmpty()
  @IsInt()
  orderStatusId: number;

  @IsNotEmpty()
  @IsInt()
  addressId: number;

  @IsDateFormat()
  orderDate: Date;

  @IsNotEmpty()
  @IsDecimal()
  totalAmountWithVat: number;

  @IsNotEmpty()
  @IsDecimal()
  totalAmountWithoutVat: number;

  @IsOptional()
  @IsDecimal()
  vat?: number;
}
