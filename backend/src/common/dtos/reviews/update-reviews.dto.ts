import { IsInt, IsString, MaxLength, IsNumber, Min, Max, IsNotEmpty } from 'class-validator';
import { IsDateFormat } from '../../decorators/date-format.decorator';

export class UpdateReviewDto {
  @IsNotEmpty()
  @IsInt()
  product_id?: number;

  @IsNotEmpty()
  @IsInt()
  customer_id?: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  guest_name?: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @IsNumber()
  @Max(5)
  rating?: number;

  @IsNotEmpty()
  @IsString()
  review_text?: string;

  @IsNotEmpty()
  @IsDateFormat()
  review_date?: Date;
}
