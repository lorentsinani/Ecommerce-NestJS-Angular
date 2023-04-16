import { IsNotEmpty, IsInt, IsOptional, IsString, MaxLength, IsNumber, Min, Max } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';

export class CreateReviewDto {
  @IsNotEmpty()
  @IsInt()
  product_id: number;

  @IsOptional()
  @IsInt()
  customer_id: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  guest_name: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @IsNumber()
  @Max(5)
  rating: number;

  @IsNotEmpty()
  @IsString()
  review_text: string;

  @IsOptional()
  @IsDateFormat()
  review_date: Date;
}
