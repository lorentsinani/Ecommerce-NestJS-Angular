import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './config/app-config';
import { databaseConfig } from './config/database-config';
import { jwtConfig } from './config/jwt-config';
import { ApplicationServicesModule } from './application/application-services.module';
import { DomainModule } from './domain/domain.module';
import { DatabaseModule } from './common/database/database.module';

@Module({
  imports: [ConfigModule.forRoot({ load: [appConfig, databaseConfig, jwtConfig], isGlobal: true }), DatabaseModule, ApplicationServicesModule, DomainModule],
  providers: []
})
export class AppModule {}
