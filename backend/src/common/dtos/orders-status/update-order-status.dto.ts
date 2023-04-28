import { IsOptional, IsNotEmpty, IsEnum, IsString, MaxLength } from 'class-validator';
import { OrderStatus } from '../../constants/enums/orders-status.enum';

export class UpdateOrderStatusDto {
  @IsOptional()
  @IsNotEmpty()
  @IsEnum(OrderStatus)
  statusName: OrderStatus;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  description: string;
}
