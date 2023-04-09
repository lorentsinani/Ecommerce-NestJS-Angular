import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { PasswordHasherMiddleware } from '../../common/middlewares/password-hasher.middleware';
import { UsersRepository } from './users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService]
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PasswordHasherMiddleware).forRoutes(
      { path: 'users', method: RequestMethod.POST }, // create route
      { path: 'users/:id', method: RequestMethod.PUT } // update route
    );
  }
}
