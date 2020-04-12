import * as Joi from '@hapi/joi';
import { ActorCreateRequest } from './actorCreate.request';
import { ActorDtoSchema } from '../common/actorDto.schema';

export const ActorCreateRequestSchema = Joi.object<ActorCreateRequest>({
  ...ActorDtoSchema,
});
