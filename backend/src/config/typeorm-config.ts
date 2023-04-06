import { databaseConfig } from './database-config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// TypeORM configuration
export const typeOrmConfig = () => {
  return {
    type: 'postgres',
    host: databaseConfig().host,
    port: databaseConfig().port,
    username: databaseConfig().username,
    password: databaseConfig().password,
    database: databaseConfig().database,
    entities: [
      /* Array of your entity classes */
    ],
    synchronize: true, // Auto-create database tables (for development only)
  } as TypeOrmModuleOptions;
};
