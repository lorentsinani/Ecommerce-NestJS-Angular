import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './config/app-config';
import { databaseConfig } from './config/database-config';
import { DatabaseModule } from './common/database/database.module';
import { jwtConfig } from './config/jwt-config';
import { ApplicationServicesModule } from './application-services/application-services.module';
import { ControllersModule } from './controllers/controllers.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, databaseConfig, jwtConfig],
      isGlobal: true,
    }),
    DatabaseModule,
    ApplicationServicesModule,
    ControllersModule,
    DomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
