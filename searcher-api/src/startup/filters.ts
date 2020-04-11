import { INestApplication } from '@nestjs/common';
import { Logger, AllExceptionsFilter } from 'sdk';
import { HttpAdapterHost } from '@nestjs/core';

export function configureFilters(app: INestApplication, logger?: Logger): void {
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter, logger));
}
