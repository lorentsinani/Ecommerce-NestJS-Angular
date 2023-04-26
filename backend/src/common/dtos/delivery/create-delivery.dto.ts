import { IsNotEmpty, IsEnum, IsString } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';
import { DeliveryStatus } from '../../constants/enums/delivery-status.enum';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class CreateDeliveryDto {
  @IsNotEmpty()
  @IsDateFormat()
  delivery_date: Date;

  @IsNotEmpty()
  @IsString()
  delivery_comments: string;

  @IsNotEmpty()
  @IsNumberFormat()
  delivery_cost: number;

  @IsNotEmpty()
  @IsNumberFormat()
  delivery_method_id: number;

  @IsNotEmpty()
  @IsEnum(DeliveryStatus)
  delivery_status: DeliveryStatus;

  @IsNotEmpty()
  @IsDateFormat()
  promised_delivery_date: Date;

  @IsNotEmpty()
  @IsNumberFormat()
  delivery_order_id: number;
}
