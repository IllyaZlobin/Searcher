import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function configureSwagger(
  app: INestApplication,
  title: string,
  description: string,
  version: string,
  apiUrl = 'docs',
  moduleOptions = {},
): void {
  const options = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(apiUrl, app, document, {
    swaggerOptions: { displayRequestDuration: true },
    ...moduleOptions,
  });
}
