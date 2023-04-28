import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateConversationDto {
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  customerId: number;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  employeeId: number;
}
