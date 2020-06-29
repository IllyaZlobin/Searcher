import * as Joi from '@hapi/joi';
import { UserCreateRequest } from './userCreate.request';
import { UserDtoSchema } from '../common/userDto.schema';

export const UserCreateRequestSchema = Joi.object<UserCreateRequest>({
  ...UserDtoSchema,
});
