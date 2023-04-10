import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { EmployeesAppModule } from './employees-app/employees-app.module';

@Module({
  imports: [AuthModule, EmployeesAppModule],
})
export class ApplicationServicesModule {}
