import * as Joi from '@hapi/joi';
import { PaginationRequestSchema } from 'sdk/nest/dtos';
import { ActoreGetAllRequest } from './actorGetAll.request';

export const ActorGetAllRequestSchema = Joi.object<ActoreGetAllRequest>({
  search: Joi.string()
    .max(50)
    .allow(null)
    .allow('')
    .default(null)
    .optional(),
  ...PaginationRequestSchema,
});
