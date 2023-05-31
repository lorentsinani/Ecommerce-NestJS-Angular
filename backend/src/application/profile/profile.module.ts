import { TokenManagementModule } from './../../common/providers/token-management/token-management.module';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { UsersModule } from '../../domain/users/users.module';
import { JwtTokenVerifierMiddleware } from '../../common/middlewares/jwt-token-verifier.middleware';
import { PasswordHasherMiddleware } from '../../common/middlewares/password-hasher.middleware';

@Module({
  imports: [UsersModule, TokenManagementModule],
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtTokenVerifierMiddleware)
      .forRoutes('profile')
      .apply(PasswordHasherMiddleware)
      .forRoutes({ path: 'profile/update-password', method: RequestMethod.PATCH });
  }
}
