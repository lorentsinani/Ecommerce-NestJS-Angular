import { IsString, IsDate, IsNotEmpty, IsOptional } from 'class-validator';
import { IsNumberFormat } from '../../decorators/number-format.decorator';

export class UpdateEmployeeDto {
  @IsOptional()
  @IsNotEmpty()
  @IsDate()
  hireDate: Date;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  jobTitle: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  photoUrl: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumberFormat()
  salary: number;
}
