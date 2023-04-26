import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';
import { IsNotEmpty, IsString, IsDate, IsOptional } from 'class-validator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class CreateEmployeeDto {
  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
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
  @IsNumberFormat()
  salary: number;
}
