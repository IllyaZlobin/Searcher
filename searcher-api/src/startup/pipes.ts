import { INestApplication } from '@nestjs/common';
import { JoiValidationPipe } from 'sdk';
import { AuthValidationSchemas } from 'src/core/auth/authValidation.schema';

export function configurePipes(app: INestApplication): void {
  app.useGlobalPipes(
    new JoiValidationPipe({
      ...AuthValidationSchemas,
    }),
  );
}
