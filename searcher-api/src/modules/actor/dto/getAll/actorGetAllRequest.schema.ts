import * as Joi from '@hapi/joi';
import { PaginationRequestSchema } from 'sdk/nest/dtos';
import { ActorGetAllRequest } from './actorGetAll.request';

export const ActorGetAllRequestSchema = Joi.object<ActorGetAllRequest>({
  search: Joi.string()
    .max(50)
    .allow(null)
    .allow('')
    .default(null)
    .optional(),
  ...PaginationRequestSchema,
});
