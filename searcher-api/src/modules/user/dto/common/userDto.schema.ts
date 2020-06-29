import * as Joi from '@hapi/joi';
import { UserRoles } from 'sdk/models/enums';

export const UserDtoSchema = {
  id: Joi.number()
    .optional()
    .default(0),
  email: Joi.string()
    .email()
    .required(),
  name: Joi.string()
    .max(50)
    .required(),
  surname: Joi.string()
    .max(50)
    .allow(null)
    .optional(),
  gender: Joi.string()
    .allow(null)
    .optional(),
  age: Joi.number()
    .optional()
    .allow(null),
  cityId: Joi.number()
    .positive()
    .allow(null)
    .optional(),
  countryId: Joi.number()
    .positive()
    .allow(null)
    .optional(),
  web: Joi.string()
    .max(500)
    .optional()
    .allow(null)
    .default(null),
  password: Joi.string()
    .max(50)
    .min(6)
    .required(),
  role: Joi.string()
    .valid(...Object.values(UserRoles))
    .optional()
    .allow(null)
    .default(UserRoles.User),
};
