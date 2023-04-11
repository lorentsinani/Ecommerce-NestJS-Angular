import { EmployeesModule } from './../../domain/employees/employees.module';
import { AdminModule } from '../../domain/admin/admin.module';
import { UsersModule } from '../../domain/users/users.module';
import { AppAdminService } from './app-admin.service';
import { AppAdminController } from './app-admin.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsersModule, AdminModule, EmployeesModule],
  providers: [AppAdminService],
  controllers: [AppAdminController],
  exports: [AppAdminService]
})
export class AppAdminModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(JwtTokenVerifierMiddleware).forRoutes('admin-app/*');
  }
}
