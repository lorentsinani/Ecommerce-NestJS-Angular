import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersModule } from '../../domain/users/users.module';
import { JwtTokenVerifierMiddleware } from '../../common/middlewares/jwt-token-verifier.middleware';
import { EmployeesModule } from '../../domain/employees/employees.module';
import { AppEmployeeController } from './app-employee.controller';
import { AppEmployeeService } from './app-employee.service';

@Module({
  imports: [UsersModule, EmployeesModule],
  providers: [AppEmployeeService],
  controllers: [AppEmployeeController],
  exports: [AppEmployeeService]
})
export class AppEmployeeModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtTokenVerifierMiddleware).forRoutes('employees-app/*');
  }
}
