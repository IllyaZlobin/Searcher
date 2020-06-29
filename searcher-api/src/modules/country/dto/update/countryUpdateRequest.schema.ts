import * as Joi from '@hapi/joi';
import { CountryDtoSchema } from '../common/countryDto.schema';
import { CountryUpdateRequest } from './countryUpdate.request';

export const CountryUpdateRequestSchema = Joi.object<CountryUpdateRequest>({
  ...CountryDtoSchema,
});
