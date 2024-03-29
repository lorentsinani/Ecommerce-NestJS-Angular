import { PasswordHasherMiddleware } from './../../common/middlewares/password-hasher.middleware';
import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../../domain/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtTokenVerifierMiddleware } from '../../common/middlewares/jwt-token-verifier.middleware';
import { AuthController } from './auth.controller';
import { PermissionsModule } from '../../domain/permissions/permissions.module';
import { RoleModule } from '../../domain/role/role.module';
import { MailerModule } from '../../domain/mailer/mailer.module';
import { TokenManagementModule } from '../../common/providers/token-management/token-management.module';


@Module({
  imports: [
    UsersModule,
    PermissionsModule,
    RoleModule,
    TokenManagementModule,
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '1d' }
    }),
    MailerModule
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
      .forRoutes('auth/logout')
      .apply(PasswordHasherMiddleware)
      .forRoutes({ path: 'auth/register', method: RequestMethod.POST });
  }
}
