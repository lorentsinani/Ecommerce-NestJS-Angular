import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './config/app-config';
import { databaseConfig } from './config/database-config';
import { jwtConfig } from './config/jwt-config';
import { ApplicationServicesModule } from './application-services/application-services.module';
import { ControllersModule } from './controllers/controllers.module';
import { DomainModule } from './domain/domain.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, databaseConfig, jwtConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => typeOrmConfig(),
    }),
    ApplicationServicesModule,
    ControllersModule,
    DomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
