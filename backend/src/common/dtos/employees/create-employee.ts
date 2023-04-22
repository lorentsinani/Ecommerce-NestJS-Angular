import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';

export class CreateEmployeeDto {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  user_id: number;

  @IsNotEmpty()
  @IsDateFormat()
  hire_date: Date;

  @IsNotEmpty()
  @IsString()
  job_title: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  photo_url: string;

  @IsNotEmpty()
  @IsNumber()
  salary: number;
}
