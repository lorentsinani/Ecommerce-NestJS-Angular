import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateProductDetailsDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  origin: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  warranty: number;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  color: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  size: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  producer_id: number;
}
