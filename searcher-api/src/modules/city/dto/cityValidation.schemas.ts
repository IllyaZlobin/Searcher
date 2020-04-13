import { JoiRegisteredSchemas } from 'sdk';
import { CityGetAllRequestSchema } from './getAll/cityGetAllRequest.schema';
import { CityCreateRequestSchema } from './create/cityCreateRequest.schema';

export const CityValidationSchemas: JoiRegisteredSchemas = {
  CityGetAllRequest: CityGetAllRequestSchema,
  CityCreateRequest: CityCreateRequestSchema,
};
