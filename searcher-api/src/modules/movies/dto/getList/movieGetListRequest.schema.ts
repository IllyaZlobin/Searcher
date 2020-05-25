import * as Joi from '@hapi/joi';
import { PaginationRequestSchema } from 'sdk/nest/dtos';
import { MovieGetListRequest } from './movieGetList.request';

export const MovieGetListRequestSchema = Joi.object<MovieGetListRequest>({
  ...PaginationRequestSchema,
});
