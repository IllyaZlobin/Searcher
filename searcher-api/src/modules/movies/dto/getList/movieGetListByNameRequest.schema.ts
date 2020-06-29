import * as Joi from '@hapi/joi';
import { PaginationRequestSchema } from 'sdk/nest/dtos';
import { MovieGetListByNameRequest } from './movieGetListByName.request';

export const MovieGetListByNameRequestSchema = Joi.object<MovieGetListByNameRequest>({
  ...PaginationRequestSchema,
  name: Joi.string().required(),
});
