import { INestApplication } from '@nestjs/common';
import { JoiValidationPipe } from 'sdk';
import { ActorValidationSchemas } from 'src/modules/actor/dto/actorValidation.schemas';
import { CityValidationSchemas } from 'src/modules/city/dto/cityValidation.schemas';
import { CountryValidationSchemas } from 'src/modules/country/dto/countryValidation.schemas';

export function configurePipes(app: INestApplication): void {
  app.useGlobalPipes(
    new JoiValidationPipe({
      ...ActorValidationSchemas,
      ...CityValidationSchemas,
      ...CountryValidationSchemas,
    }),
  );
}
