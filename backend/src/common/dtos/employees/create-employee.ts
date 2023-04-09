import { IsNotEmpty, IsString, IsNumber, IsDate } from 'class-validator';

export class CreateEmployeeDto {
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
