import * as Joi from '@hapi/joi';
import { CityUpdateRequest } from './cityUpdate.request';
import { CityDtoSchema } from '../common/cityDto.schema';

export const CityUpdateRequestSchema = Joi.object<CityUpdateRequest>({
  ...CityDtoSchema,
});
