import { registerAs } from '@nestjs/config';

export interface IJwtConfig {
  jwt_secret: string;
  jwt_expires_in: string;
}

export const jwtConfig = registerAs('jwt', (): IJwtConfig => {
  const config: IJwtConfig = {
    jwt_secret: process.env.JWT_SECRET || '',
    jwt_expires_in: process.env.JWT_EXPIRES_IN || ''
  };
  return config;
});
