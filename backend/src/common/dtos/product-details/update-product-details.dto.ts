import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateProductDetailsDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  origin: string;

  @IsOptional()
  @IsNumber()
  warranty: number;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  color: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  size: string;

  @IsOptional()
  @IsNumber()
  producer_id: number;
}
