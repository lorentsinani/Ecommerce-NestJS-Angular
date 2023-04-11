import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AdminAppService } from './admin-app.service';
import { AdminAppController } from './admin-app.controller';
import { UsersModule } from '../../domain/users/users.module';
import { AdminModule } from '../../domain/admin/admin.module';
import { EmployeesModule } from '../../domain/employees/employees.module';
import { JwtTokenVerifierMiddleware } from '../../common/middlewares/jwt-token-verifier.middleware';

@Module({
  imports: [UsersModule, AdminModule, EmployeesModule],
  providers: [AdminAppService],
  controllers: [AdminAppController],
  exports: [AdminAppService]
})
export class AdminAppModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(JwtTokenVerifierMiddleware).forRoutes('admin-app/*');
  }
}
