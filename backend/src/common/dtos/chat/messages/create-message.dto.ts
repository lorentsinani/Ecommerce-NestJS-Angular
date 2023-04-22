import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  conversation_id: number;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  sender_id: number;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  receiver_id: number;

  @IsNotEmpty()
  @IsNumber()
  @IsInt()
  content: string;
}
