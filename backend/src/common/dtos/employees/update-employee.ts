import { IsString, IsNumber, IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateEmployeeDto {
  @IsOptional()
  @IsNotEmpty()
  @IsDate()
  hire_date: Date;

  @IsOptional()
  @IsString()
  job_title: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  photo_url?: string;

  @IsOptional()
  @IsNumber()
  salary?: number;
}
