import { IsNotEmpty, IsEnum, IsString, IsOptional } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';
import { DeliveryStatus } from '../../constants/enums/delivery-status.enum';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class UpdateDeliveryDto {
  @IsOptional()
  @IsNotEmpty()
  @IsDateFormat()
  delivery_date: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  delivery_comments: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  delivery_cost: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  delivery_method_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsEnum(DeliveryStatus)
  delivery_status: DeliveryStatus;

  @IsOptional()
  @IsNotEmpty()
  @IsDateFormat()
  promised_delivery_date: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  delivery_order_id: number;
}
