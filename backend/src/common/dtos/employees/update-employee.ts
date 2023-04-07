import { IsOptional, IsNotEmpty, IsString, IsEnum, Length } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateEmployeeDto {
  @IsOptional()
  @Type(() => Date)
  hire_date: Date;

  @IsOptional()
  @IsString()
  @Length(1, 50)
  job_title: string;

  @IsOptional()
  @IsString()
  @Length(0, 100)
  address: string;

  @IsOptional()
  @IsString()
  @Length(0, 255)
  photo_url: string;

  @IsOptional()
  @Type(() => Number)
  salary: number;
}
