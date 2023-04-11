import { IsNotEmpty, IsString, IsNumber, IsDate, IsOptional } from 'class-validator';

export class CreateEmployeeDto {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  @IsString()
  @IsDate()
  hire_date: Date;

  @IsNotEmpty()
  @IsString()
  job_title: string;

  @IsString()
  address: string;

  @IsString()
  photo_url: string;

  @IsNotEmpty()
  @IsNumber()
  salary: number;
}
