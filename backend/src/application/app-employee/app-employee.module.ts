import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersModule } from '../../domain/users/users.module';
import { JwtTokenVerifierMiddleware } from '../../common/middlewares/jwt-token-verifier.middleware';
import { EmployeesService } from '../../domain/employees/employees.service';
import { EmployeesModule } from '../../domain/employees/employees.module';
import { AppEmployeeController } from './app-employee.controller';

@Module({
  imports: [UsersModule, EmployeesModule],
  providers: [EmployeesService],
  controllers: [AppEmployeeController],
  exports: [EmployeesService]
})
export class AppEmployeeModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtTokenVerifierMiddleware).forRoutes('employees-app/*');
  }
}
