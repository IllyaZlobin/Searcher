import * as Joi from '@hapi/joi';
import { Gender } from 'sdk';
import { UserRegisterRequest } from './userRegister.request';

export const UserRegisterRequestSchema = Joi.object<UserRegisterRequest>({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .max(20)
    .required(),
  name: Joi.string()
    .max(20)
    .required(),
  surname: Joi.string()
    .max(20)
    .allow(null)
    .optional(),
  gender: Joi.valid(...Object.values(Gender)).required(),
  age: Joi.number()
    .integer()
    .positive()
    .required(),
  photo: Joi.object()
    .allow(null)
    .optional(),
  city: Joi.number()
    .integer()
    .positive()
    .allow(null)
    .optional(),
  country: Joi.number()
    .integer()
    .positive()
    .allow(null)
    .optional(),
  web: Joi.string()
    .allow(null)
    .optional(),
});
