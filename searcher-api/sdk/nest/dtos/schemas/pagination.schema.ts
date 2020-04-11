import * as Joi from '@hapi/joi';

export const PaginationRequestSchema = {
  limit: Joi.number()
    .positive()
    .allow(null)
    .default(50)
    .optional(),
  offset: Joi.number()
    .min(0)
    .optional()
    .allow(null)
    .default(0)
    .optional(),
};
