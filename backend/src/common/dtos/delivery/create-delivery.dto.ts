import { IsNotEmpty, IsEnum, IsNumber, IsString } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';
import { DeliveryStatus } from '../../constants/enums/delivery-status.enum';

export class CreateDeliveryDto {
  @IsNotEmpty()
  @IsDateFormat()
  delivery_date: Date;

  @IsNotEmpty()
  @IsString()
  delivery_comments: string;

  @IsNotEmpty()
  @IsNumber()
  delivery_cost: number;

  @IsNotEmpty()
  @IsNumber()
  delivery_method_id: number;

  @IsNotEmpty()
  @IsEnum(DeliveryStatus)
  delivery_status: DeliveryStatus;

  @IsNotEmpty()
  @IsDateFormat()
  promised_delivery_date: Date;

  @IsNotEmpty()
  @IsNumber()
  delivery_order_id: number;
}
