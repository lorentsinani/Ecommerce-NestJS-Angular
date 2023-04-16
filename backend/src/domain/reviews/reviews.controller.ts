import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { ReviewService } from './reviews.service';
import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';
import { CreateProductReviewDto } from '../../common/dtos/reviews/create-reviews.dto';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { UpdateProductReviewDto } from '../../common/dtos/reviews/update-reviews.dto';

@Controller('review')
@UsePipes(new ValidationPipe())
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Post()
  @UseFilters(new DuplicateKeyExceptionFilter('Review'))
  async create(@Body() createProductReviewDto: CreateProductReviewDto) {
    return this.reviewService.create(createProductReviewDto);
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number) {
    return this.reviewService.findById(id);
  }
  @Get()
  async findAll() {
    return this.reviewService.findAll();
  }

  @Patch(':id')
  @UseFilters(new DuplicateKeyExceptionFilter('review'))
  @UsePipes(new NullDtoValidationPipe())
  async update(@Param('id') id: number, @Body() updateProductReviewDto: UpdateProductReviewDto) {
    return this.reviewService.update(id, updateProductReviewDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.reviewService.delete(id);
  }
}
