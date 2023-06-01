import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ReviewsRepository } from './reviews.repository';
import { CreateProductReviewDto } from '../../common/dtos/reviews/create-reviews.dto';
import { IReviews } from '../../common/interfaces/reviews.interface';
import { UpdateProductReviewDto } from '../../common/dtos/reviews/update-reviews.dto';

@Injectable()
export class ReviewService {
  private NotCreatedExceptionMessage = 'Review is not created';
  private NotFoundExceptionMessage = 'Review is not found';

  constructor(private readonly reviewRepository: ReviewsRepository) {}

  async create(createProductReviewDto: CreateProductReviewDto): Promise<IReviews> {
    const createdReview = await this.reviewRepository.createReview(createProductReviewDto);

    if (!createProductReviewDto) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.BAD_REQUEST);
    }
    return createdReview.raw[0];
  }

  async findAll(): Promise<IReviews[]> {
    return this.reviewRepository.findAllReviews();
  }

  async findById(id: number): Promise<IReviews> {
    const reviewExists = await this.reviewRepository.findReviewById(id);

    if (!reviewExists) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return reviewExists;
  }

  async update(id: number, updateReviewDto: UpdateProductReviewDto): Promise<IReviews> {
    const updatedReview = await this.reviewRepository.updateReview(id, updateReviewDto);

    if (!updatedReview.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return updatedReview.raw[0];
  }

  async delete(id: number): Promise<IReviews> {
    const deletedReview = await this.reviewRepository.deleteProduct(id);

    if (!deletedReview.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedReview.raw[0];
  }
}
