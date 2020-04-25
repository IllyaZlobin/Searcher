import { JoiRegisteredSchemas } from 'sdk';
import { UserCreateRequestSchema } from './create/userCreateRequest.schema';
import { UserGetAllRequestSchema } from './getAll/userGetAllRequest.schema';
import { UserUpdateRequestSchema } from './update/userUpdateRequest.schema';

export const UserValidationSchemas: JoiRegisteredSchemas = {
  UserCreateRequest: UserCreateRequestSchema,
  UserGetAllRequest: UserGetAllRequestSchema,
  UserUpdateRequest: UserUpdateRequestSchema,
};
