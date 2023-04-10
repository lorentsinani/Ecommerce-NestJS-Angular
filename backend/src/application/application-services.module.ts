import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AdminAppModule } from './admin-app/admin-app.module';
import { EmployeesAppModule } from './employees-app/employees-app.module';

@Module({
  imports: [AuthModule, EmployeesAppModule, AdminAppModule],
})
export class ApplicationServicesModule {}
