import { IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateConversationDto {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  customer_id: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  employee_id: number;
}
