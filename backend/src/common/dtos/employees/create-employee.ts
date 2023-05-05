import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class CreateEmployeeDto {
  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  userId: number;

  @IsNotEmpty()
  @IsDateFormat()
  hireDate: Date;

  @IsNotEmpty()
  @IsString()
  jobTitle: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  photoUrl: string;

  @IsNotEmpty()
  @IsNumberFormat()
  salary: number;
}
