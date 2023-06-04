import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ReviewsRepository } from './reviews.repository';
import { CreateReviewDto } from '../../common/dtos/reviews/create-reviews.dto';
import { UpdateReviewDto } from '../../common/dtos/reviews/update-reviews.dto';
import { Reviews } from '../entities/reviews.entity';

@Injectable()
export class ReviewService {
  private NotCreatedExceptionMessage = 'Review is not created';
  private NotFoundExceptionMessage = 'Review is not found';

  constructor(private readonly reviewRepository: ReviewsRepository) {}

  async create(createProductReviewDto: CreateReviewDto): Promise<Reviews> {
    const createdReview = await this.reviewRepository.createReview(createProductReviewDto);

    if (!createProductReviewDto) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.BAD_REQUEST);
    }
    return createdReview.raw[0];
  }

  async findAll(): Promise<Reviews[]> {
    return this.reviewRepository.findAllReviews();
  }

  async findById(id: number): Promise<Reviews> {
    const reviewExists = await this.reviewRepository.findReviewById(id);

    if (!reviewExists) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return reviewExists;
  }

  async update(id: number, updateReviewDto: UpdateReviewDto): Promise<Reviews> {
    const updatedReview = await this.reviewRepository.updateReview(id, updateReviewDto);

    if (!updatedReview.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }
    return updatedReview.raw[0];
  }

  async delete(id: number): Promise<Reviews> {
    const deletedReview = await this.reviewRepository.deleteProduct(id);

    if (!deletedReview.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedReview.raw[0];
  }
}
