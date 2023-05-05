import { IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateConversationDto {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  customerId: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  employeeId: number;
}
