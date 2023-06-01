import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { DeliveryMethod } from '../../constants/enums/delivery-method.enum';

export class CreateDeliveryMethodDto {
  @IsNotEmpty()
  @IsString()
  deliveryMethodName: string;

  @IsNotEmpty() // add a custom decorator that accepts just numbers, regex
  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  deliveryTime: string;

  @IsNotEmpty()
  @IsEnum(DeliveryMethod)
  deliveryMethod: DeliveryMethod;
}
