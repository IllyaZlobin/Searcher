import * as Joi from '@hapi/joi';

export const CityDtoSchema = {
  id: Joi.number()
    .allow(null)
    .optional()
    .default(0),
  name: Joi.string()
    .min(1)
    .max(50)
    .required(),
  name_ancii: Joi.string()
    .min(1)
    .max(50)
    .required(),
  lat: Joi.number()
    .allow(null)
    .default(null)
    .optional(),
  lng: Joi.number()
    .allow(null)
    .default(null)
    .optional(),
  country: Joi.string()
    .min(1)
    .max(50)
    .required(),
  iso2: Joi.string()
    .min(1)
    .max(15)
    .allow(null)
    .default(null)
    .optional(),
  iso3: Joi.string()
    .min(1)
    .max(15)
    .allow(null)
    .default(null)
    .optional(),
  population: Joi.number()
    .integer()
    .allow(null)
    .default(null)
    .optional(),
};
