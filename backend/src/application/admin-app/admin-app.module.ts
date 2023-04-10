import { Module } from '@nestjs/common';
import { AdminAppService } from './admin-app.service';
import { AdminAppController } from './admin-app.controller';
import { UsersModule } from '../../domain/users/users.module';
import { AdminModule } from '../../domain/admin/admin.module';
import { EmployeesModule } from '../../domain/employees/employees.module';

@Module({
  imports: [UsersModule, AdminModule, EmployeesModule],
  providers: [AdminAppService],
  controllers: [AdminAppController],
  exports: [AdminAppService],
})
export class AdminAppModule {}



