import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReviewService } from './reviews.service';
import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';
import { CreateReviewDto } from '../../common/dtos/reviews/create-reviews.dto';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { UpdateReviewDto } from '../../common/dtos/reviews/update-reviews.dto';

@Controller('review')
@UsePipes(new ValidationPipe())
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Post()
  @UseFilters(new DuplicateKeyExceptionFilter('Review'))
  create(@Body() createProductReviewDto: CreateReviewDto) {
    return this.reviewService.create(createProductReviewDto);
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.reviewService.findById(id);
  }
  @Get()
  findAll() {
    return this.reviewService.findAll();
  }

  @Patch(':id')
  @UseFilters(new DuplicateKeyExceptionFilter('review'))
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id') id: number, @Body() updateProductReviewDto: UpdateReviewDto) {
    return this.reviewService.update(id, updateProductReviewDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.reviewService.delete(id);
  }
}
