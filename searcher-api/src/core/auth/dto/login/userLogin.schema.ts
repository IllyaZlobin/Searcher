import * as Joi from '@hapi/joi';
import { UserLoginRequest } from './userLogin.request';

export const UserLoginRequestSchema = Joi.object<UserLoginRequest>({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .max(20)
    .required(),
});
