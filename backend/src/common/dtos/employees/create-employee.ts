import { IsNotEmpty, IsString, IsEnum, Length } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateUserDto } from '../users/create-user.dto';

export class CreateEmployeeDto {
  @Type(() => CreateUserDto)
  @IsNotEmpty()
  user: CreateUserDto;

  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  job_title: string;

  @IsNotEmpty()
  @Type(() => Date)
  hire_date: Date;

  @IsString()
  @Length(0, 100)
  address: string;

  @IsString()
  @Length(0, 255)
  photo_url: string;

  @IsNotEmpty()
  @Type(() => Number)
  salary: number;
}
