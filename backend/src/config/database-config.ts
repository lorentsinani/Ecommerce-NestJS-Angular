import { registerAs } from '@nestjs/config';

export interface IDatabaseConfig {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export const databaseConfig = registerAs('database', (): IDatabaseConfig => {
  const config: IDatabaseConfig = {
    type: process.env.DB_TYPE as string,
    host: process.env.DB_HOST as string,
    port: parseInt(process.env.DB_PORT as string) || 5432,
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DATABASE as string
  };
  return config;
});
