import * as Joi from '@hapi/joi';
import { CountryDtoSchema } from '../common/countryDto.schema';
import { CountryCreateRequest } from './countryCreate.request';

export const CountryCreateRequestSchema = Joi.object<CountryCreateRequest>({
  ...CountryDtoSchema,
});
