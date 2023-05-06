import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { CategoryRepository } from './category.repository';
import { JwtTokenVerifierMiddleware } from '../../common/middlewares/jwt-token-verifier.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryService, CategoryRepository],
  controllers: [CategoryController],
  exports: [CategoryService]
})
export class CategoryModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtTokenVerifierMiddleware).forRoutes({ path: 'category', method: RequestMethod.POST });
  }
}
