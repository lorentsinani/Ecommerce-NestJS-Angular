import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateConversationDto {
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  customer_id: number;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  employee_id: number;
}
