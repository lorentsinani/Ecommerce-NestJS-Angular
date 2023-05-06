import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig, IAppConfig } from './config/app-config';
import dotenv from 'dotenv';

dotenv.config({
  path: `.env`
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config: IAppConfig = app.get<IAppConfig>(appConfig.KEY);

  app.enableCors({
    // with this line of code the frontend can access this api
    origin: ['http://localhost:4200', 'http://localhost:3001'] // 4200 for angular , 3001 changed for react
  });

  await app.listen(config.port, () => {
    console.log(`Server is listening on port ${config.port}`);
  });
}
bootstrap();
