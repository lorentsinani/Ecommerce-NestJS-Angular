import { IsOptional, IsNotEmpty, IsString } from 'class-validator';

export class UpdateObjectDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name: string;
}
