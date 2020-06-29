import { INestApplication } from '@nestjs/common';
import { ToApiResponseInterceptor } from 'sdk';

export function configureInterceptors(app: INestApplication): void {
  app.useGlobalInterceptors(new ToApiResponseInterceptor());
}
