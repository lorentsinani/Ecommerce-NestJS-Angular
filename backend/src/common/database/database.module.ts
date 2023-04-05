import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { IDatabaseConfig } from '../../config/database-config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService<IDatabaseConfig>) => {
        const databaseConfig = configService.get<IDatabaseConfig>('database');
        return {
          type: 'postgres',
          host: databaseConfig?.host,
          port: databaseConfig?.port,
          username: databaseConfig?.username,
          password: databaseConfig?.password,
          database: databaseConfig?.database,
          entities: [],
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
