import { IsString, IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

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
  @IsNumberFormat()
  salary: number;
}
