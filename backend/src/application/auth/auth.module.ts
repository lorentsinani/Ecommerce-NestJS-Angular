import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../../domain/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtTokenVerifierMiddleware } from '../../common/middlewares/jwt-token-verifier.middleware';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '1d' }
    })
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtTokenVerifierMiddleware)
      .exclude({ path: 'auth/login', method: RequestMethod.POST })
      .exclude({ path: 'auth/register', method: RequestMethod.POST })
      .forRoutes('auth/logout');
  }
}
