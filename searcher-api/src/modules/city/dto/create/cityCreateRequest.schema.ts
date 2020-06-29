import * as Joi from '@hapi/joi';
import { CityCreateRequest } from './cityCreate.request';
import { CityDtoSchema } from '../common/cityDto.schema';

export const CityCreateRequestSchema = Joi.object<CityCreateRequest>({
  ...CityDtoSchema,
});
