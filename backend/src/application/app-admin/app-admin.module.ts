import { EmployeesModule } from './../../domain/employees/employees.module';
import { AdminModule } from '../../domain/admin/admin.module';
import { UsersModule } from '../../domain/users/users.module';
import { AppAdminService } from './app-admin.service';
import { AppAdminController } from './app-admin.controller';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { JwtTokenVerifierMiddleware } from '../../common/middlewares/jwt-token-verifier.middleware';

@Module({
  imports: [UsersModule, AdminModule, EmployeesModule],
  providers: [AppAdminService],
  controllers: [AppAdminController],
  exports: [AppAdminService]
})
export class AppAdminModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtTokenVerifierMiddleware).forRoutes('admin-app/*');
  }
}
