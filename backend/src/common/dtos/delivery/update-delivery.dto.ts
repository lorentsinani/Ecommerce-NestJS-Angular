import { IsNotEmpty, IsEnum, IsString, IsOptional } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';
import { DeliveryStatus } from '../../constants/enums/delivery-status.enum';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class UpdateDeliveryDto {
  @IsOptional()
  @IsNotEmpty()
  @IsDateFormat()
  deliveryDate: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  deliveryComments: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  deliveryCost: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  deliveryMethodId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsEnum(DeliveryStatus)
  deliveryStatus: DeliveryStatus;

  @IsOptional()
  @IsNotEmpty()
  @IsDateFormat()
  promisedDeliveryDate: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  deliveryOrderId: number;
}
