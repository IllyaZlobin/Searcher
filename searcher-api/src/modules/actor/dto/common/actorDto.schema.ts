import * as Joi from '@hapi/joi';

export const ActorDtoSchema = {
  id: Joi.number()
    .allow(null)
    .default(0)
    .optional(),
  imdb_name_id: Joi.string()
    .alphanum()
    .max(50)
    .allow(null)
    .default(null)
    .optional(),
  name: Joi.string()
    .min(1)
    .max(50)
    .required(),
  birth_name: Joi.string()
    .min(1)
    .max(50)
    .required(),
  height: Joi.number()
    .positive()
    .allow(null)
    .default(null)
    .optional(),
  bio: Joi.string()
    .allow(null)
    .default(null)
    .optional(),
  birth_details: Joi.string()
    .allow(null)
    .default(null)
    .optional(),
  birth_year: Joi.number()
    .integer()
    .positive()
    .allow(null)
    .default(null)
    .optional(),
  date_of_birth: Joi.string()
    .allow(null)
    .default(null)
    .optional(),
  death_details: Joi.string()
    .allow(null)
    .default(null)
    .optional(),
  death_year: Joi.number()
    .integer()
    .positive()
    .allow(null)
    .default(null)
    .optional(),
  date_of_death: Joi.string()
    .allow(null)
    .default(null)
    .optional(),
  place_of_death: Joi.string()
    .max(150)
    .allow(null)
    .default(null)
    .optional(),
  reason_of_death: Joi.string()
    .max(250)
    .allow(null)
    .default(null)
    .optional(),
  spounces: Joi.number()
    .integer()
    .positive()
    .allow(null)
    .default(null)
    .optional(),
  divorces: Joi.number()
    .integer()
    .positive()
    .allow(null)
    .default(null)
    .optional(),
  spouses_with_children: Joi.number()
    .integer()
    .positive()
    .allow(null)
    .default(null)
    .optional(),
  children: Joi.number()
    .integer()
    .positive()
    .allow(null)
    .default(null)
    .optional(),
  primary_profession: Joi.string()
    .max(100)
    .allow(null)
    .default(null)
    .optional(),
  cityId: Joi.number()
    .integer()
    .positive()
    .allow(null)
    .default(null)
    .optional(),
  countryId: Joi.number()
    .integer()
    .positive()
    .allow(null)
    .default(null)
    .optional(),
  birth_day: Joi.string()
    .allow(null)
    .default(null)
    .optional(),
  state: Joi.string()
    .allow(null)
    .default(null)
    .optional(),
  countryname: Joi.string()
    .allow(null)
    .default(null)
    .optional(),
  short_country: Joi.string()
    .allow(null)
    .default(null)
    .optional(),
};
