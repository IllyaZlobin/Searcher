import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function configureSwagger(app: INestApplication, title: string, description: string, 
  version: string, apiUrl = 'api-docs', moduleOptions = {}
){
  const options = new DocumentBuilder()
    .setTitle(title)
    .setDescription(description)
    .setVersion(version)
    .addBearerAuth()
    .build();

    const doc = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(apiUrl, app, doc, {
      swaggerOptions: { displayRequestDuration: true },
      ...moduleOptions  
    });
}