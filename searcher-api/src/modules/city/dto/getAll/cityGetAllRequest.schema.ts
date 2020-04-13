import * as Joi from '@hapi/joi';
import { PaginationRequestSchema } from 'sdk/nest/dtos';
import { CityGetAllRequest } from './cityGetAll.request';

export const CityGetAllRequestSchema = Joi.object<CityGetAllRequest>({
  ...PaginationRequestSchema,
});
