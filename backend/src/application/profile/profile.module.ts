import { MiddlewareConsumer, Module, Request, RequestMethod } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { UsersModule } from '../../domain/users/users.module';
import { JwtTokenVerifierMiddleware } from '../../common/middlewares/jwt-token-verifier.middleware';
import { PasswordHasherMiddleware } from '../../common/middlewares/password-hasher.middleware';

@Module({
  imports: [UsersModule],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtTokenVerifierMiddleware)
      .forRoutes('profile')
      .apply(PasswordHasherMiddleware)
      .forRoutes({ path: 'profile', method: RequestMethod.PATCH });
  }
}
