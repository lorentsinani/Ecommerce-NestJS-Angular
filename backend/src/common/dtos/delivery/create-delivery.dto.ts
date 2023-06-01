import { IsNotEmpty, IsEnum, IsString } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';
import { DeliveryStatus } from '../../constants/enums/delivery-status.enum';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class CreateDeliveryDto {
  @IsNotEmpty()
  @IsDateFormat()
  deliveryDate: Date;

  @IsNotEmpty()
  @IsString()
  deliveryComments: string;

  @IsNotEmpty()
  @IsNumberFormat()
  deliveryCost: number;

  @IsNotEmpty()
  @IsNumberFormat()
  deliveryMethodId: number;

  @IsNotEmpty()
  @IsEnum(DeliveryStatus)
  deliveryStatus: DeliveryStatus;

  @IsNotEmpty()
  @IsDateFormat()
  promisedDeliveryDate: Date;

  @IsNotEmpty()
  @IsNumberFormat()
  deliveryOrderId: number;
}
