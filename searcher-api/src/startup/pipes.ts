import { INestApplication } from '@nestjs/common';
import { JoiValidationPipe } from 'sdk';
import { ActorValidationSchemas } from 'src/modules/actor/dto/actorValidation.schemas';
import { CityValidationSchemas } from 'src/modules/city/dto/cityValidation.schemas';
import { CountryValidationSchemas } from 'src/modules/country/dto/countryValidation.schemas';
import { UserValidationSchemas } from 'src/modules/user/dto/userValidation.schema';
import { AuthValidationSchemas } from 'src/core/auth/dto/authValidation.schema';
import { MoviesValidationSchemas } from 'src/modules/movies/moviesValidation.schemas';

export function configurePipes(app: INestApplication): void {
  app.useGlobalPipes(
    new JoiValidationPipe({
      ...ActorValidationSchemas,
      ...CityValidationSchemas,
      ...CountryValidationSchemas,
      ...UserValidationSchemas,
      ...MoviesValidationSchemas,
      ...AuthValidationSchemas,
    }),
  );
}
