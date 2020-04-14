import * as Joi from '@hapi/joi';

export const CountryDtoSchema = {
  id: Joi.number()
    .allow(null)
    .default(0)
    .optional(),
  name: Joi.string()
    .max(50)
    .required(),
};
