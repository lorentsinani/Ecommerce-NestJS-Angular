import { IsNotEmpty, IsString, IsDate, IsOptional } from 'class-validator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class CreateEmployeeDto {
  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
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
  @IsNumberFormat()
  salary: number;
}
