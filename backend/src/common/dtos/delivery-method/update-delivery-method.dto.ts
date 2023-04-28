import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { DeliveryMethod } from '../../constants/enums/delivery-method.enum';

export class UpdateDeliveryMethodDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  deliveryMethodName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  deliveryTime: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEnum(DeliveryMethod)
  deliveryMethod: DeliveryMethod;
}
