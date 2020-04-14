import * as Joi from '@hapi/joi';
import { PaginationRequestSchema } from 'sdk/nest/dtos';
import { CountryGetAllRequest } from './countryGetAll.request';

export const CountryGetAllRequestSchema = Joi.object<CountryGetAllRequest>({
  ...PaginationRequestSchema,
});
