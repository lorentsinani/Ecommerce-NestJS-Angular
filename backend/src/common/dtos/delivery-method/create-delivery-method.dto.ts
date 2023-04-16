import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { DeliveryMethod } from '../../constants/enums/delivery-method.enum';

export class CreateDeliveryMethodDto {
  @IsNotEmpty()
  @IsString()
  delivery_method_name: string;

  @IsNotEmpty() // add a custom decorator that accepts just numbers, regex
  @IsString()
  phone_number: string;

  @IsNotEmpty()
  @IsString()
  delivery_time: string;

  @IsNotEmpty()
  @IsEnum(DeliveryMethod)
  delivery_method: DeliveryMethod;
}
