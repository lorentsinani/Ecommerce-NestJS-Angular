import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [UsersModule, EmployeesModule, AdminModule]
})
export class DomainModule {}
