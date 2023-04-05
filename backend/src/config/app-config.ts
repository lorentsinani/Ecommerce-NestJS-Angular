import { registerAs } from '@nestjs/config';

export interface IAppConfig {
  port: number;
}

export const appConfig = registerAs('app', (): IAppConfig => {
  const config: IAppConfig = {
    port: parseInt(process.env.PORT as string) || 3000,
  };
  return config;
});
