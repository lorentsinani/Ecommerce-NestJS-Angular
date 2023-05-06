import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateProductDetailsDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  origin: string;

  @IsOptional()
  @IsNotEmpty()
  @IsInt()
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
  @IsInt()
  producerId: number;
}
