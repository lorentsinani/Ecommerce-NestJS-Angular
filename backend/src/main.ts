import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appConfig, IAppConfig } from './config/app-config';
import dotenv from 'dotenv';
import { AllExceptionsFilter } from './common/filters/all-execptions.filter';

dotenv.config({
  path: `.env`,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config: IAppConfig = app.get<IAppConfig>(appConfig.KEY);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter as any));
  await app.listen(config.port);
}
bootstrap();
