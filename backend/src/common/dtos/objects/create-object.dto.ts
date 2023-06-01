import { IsNotEmpty, IsString } from 'class-validator';

export class CreateObjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}
