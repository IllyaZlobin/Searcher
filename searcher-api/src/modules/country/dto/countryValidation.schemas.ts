import { JoiRegisteredSchemas } from 'sdk';
import { CountryGetAllRequestSchema } from './getAll/countryGetAllRequest.schema';
import { CountryCreateRequestSchema } from './create/countryCreateRequest.schema';
import { CountryUpdateRequestSchema } from './update/countryUpdateRequest.schema';

export const CountryValidationSchemas: JoiRegisteredSchemas = {
  CountryGetAllRequest: CountryGetAllRequestSchema,
  CountryCreateRequest: CountryCreateRequestSchema,
  CountryUpdateRequest: CountryUpdateRequestSchema,
};
