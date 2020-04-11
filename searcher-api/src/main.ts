import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import {
  configureFilters,
  configurePipes,
  configureInterceptors,
  configureSwagger,
} from './startup';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  configurePipes(app);
  configureFilters(app);
  configureInterceptors(app);
  configureSwagger(app, 'Searcher API API', 'api documentation', '1.0');

  const port = 3000;
  await app.listen(port);
}
bootstrap();
