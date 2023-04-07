import { databaseConfig } from './database-config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
import { User } from '../domain/entities/user.entity';
import { Admin } from '../domain/entities/admin.entity';

// TypeORM configuration
export const typeOrmConfig = () => {
  return {
    type: 'postgres',
    host: databaseConfig().host,
    port: databaseConfig().port,
    username: databaseConfig().username,
    password: databaseConfig().password,
    database: databaseConfig().database,
    entities: [User, Admin],
    synchronize: true, // Auto-create database tables (for development only)
  } as TypeOrmModuleOptions;
};
