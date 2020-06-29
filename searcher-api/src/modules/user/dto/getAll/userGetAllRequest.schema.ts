import * as Joi from '@hapi/joi';
import { PaginationRequestSchema } from 'sdk/nest/dtos/schemas/pagination.schema';
import { UserGetAllRequest } from './userGetAll.request';

export const UserGetAllRequestSchema = Joi.object<UserGetAllRequest>({
  ...PaginationRequestSchema,
});
