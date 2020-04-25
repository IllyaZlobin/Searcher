import * as Joi from '@hapi/joi';
import { UserUpdateRequest } from './userUpdate.request';
import { UserDtoSchema } from '../common/userDto.schema';

export const UserUpdateRequestSchema = Joi.object<UserUpdateRequest>({
  ...UserDtoSchema,
});
