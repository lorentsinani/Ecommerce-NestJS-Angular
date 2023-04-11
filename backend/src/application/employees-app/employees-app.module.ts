import { MiddlewareConsumer, Module } from '@nestjs/common';
import { EmployeesAppService } from './employees-app.service';
import { EmployeesAppController } from './employees-app.controller';
import { UsersModule } from '../../domain/users/users.module';
import { EmployeesModule } from '../../domain/employees/employees.module';
import { JwtTokenVerifierMiddleware } from '../../common/middlewares/jwt-token-verifier.middleware';

@Module({
  imports: [UsersModule, EmployeesModule],
  providers: [EmployeesAppService],
  controllers: [EmployeesAppController],
  exports: [EmployeesAppService]
})
export class EmployeesAppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtTokenVerifierMiddleware).forRoutes('employees-app/*');
  }
}