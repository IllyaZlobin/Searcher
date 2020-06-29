import * as Joi from '@hapi/joi';
import { ActorDtoSchema } from '../common/actorDto.schema';
import { ActorUpdateRequest } from './actorUpdate.request';

export const ActorUpdateRequestSchema = Joi.object<ActorUpdateRequest>({
  ...ActorDtoSchema,
});
