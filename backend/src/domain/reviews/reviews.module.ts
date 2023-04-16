import { Module } from '@nestjs/common';
import { ReviewController } from './reviews.controller';
import { ReviewService } from './reviews.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reviews } from '../entities/reviews.entity';
import { ReviewsRepository } from './reviews.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Reviews])],
  controllers: [ReviewController],
  providers: [ReviewService, ReviewsRepository]
})
export class ReviewsModule {}
