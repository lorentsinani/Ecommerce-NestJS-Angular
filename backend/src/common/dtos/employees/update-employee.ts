import { IsString, IsNumber, IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateEmployeeDto {
  @IsOptional()
  @IsNotEmpty()
  @IsDate()
  hire_date: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  job_title: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  photo_url: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  salary: number;
}
