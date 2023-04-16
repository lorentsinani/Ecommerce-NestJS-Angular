import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Reviews } from '../entities/reviews.entity';
import { CreateReviewDto } from '../../common/dtos/reviews/create-reviews.dto';
import { UpdateReviewDto } from '../../common/dtos/reviews/update-reviews.dto';

@Injectable()
export class ReviewsRepository extends Repository<Reviews> {
  constructor(dataSource: DataSource) {
    super(Reviews, dataSource.createEntityManager());
  }

  createReview(createProductReviewDto: CreateReviewDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Reviews).values(createProductReviewDto).returning('*').execute();
  }

  findReviewById(id: number) {
    return this.createQueryBuilder('review').where('id = :id', { id }).getOne();
  }

  findAllReviews(): Promise<Reviews[]> {
    return this.find();
  }

  updateReview(id: number, updateProductReview: UpdateReviewDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Reviews).set(updateProductReview).where('id = :id', { id }).returning('*').execute();
  }

  deleteProduct(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Reviews).where('id = :id', { id }).returning('*').execute();
  }
}
