import { IsInt, IsOptional, IsString, MaxLength, IsNumber, Min, Max } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';

export class UpdateProductReviewDto {
  @IsOptional()
  @IsInt()
  product_id?: number;

  @IsOptional()
  @IsInt()
  customer_id?: number;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  guest_name?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @IsNumber()
  @Max(5)
  rating?: number;

  @IsOptional()
  @IsString()
  review_text?: string;

  @IsOptional()
  @IsDateFormat()
  review_date?: Date;
}
