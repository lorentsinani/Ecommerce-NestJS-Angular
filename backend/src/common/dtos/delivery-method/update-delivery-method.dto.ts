import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { DeliveryMethod } from '../../constants/enums/delivery-method.enum';

export class UpdateDeliveryMethodDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  delivery_method_name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  phone_number: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  delivery_time: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEnum(DeliveryMethod)
  delivery_method: DeliveryMethod;
}
