import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator'; // Added import

export class CreateProductDetailsDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  origin: string;

  @IsNotEmpty()
  @IsNumber()
  warranty: number;

  @IsNotEmpty()
  @MaxLength(100)
  color: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  size: string;

  @IsNotEmpty()
  @IsNumber()
  producer_id: number;
}
