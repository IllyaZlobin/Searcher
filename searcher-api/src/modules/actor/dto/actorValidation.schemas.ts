import { JoiRegisteredSchemas } from 'sdk';
import { ActorGetAllRequestSchema } from './getAll/actorGetAllRequest.schema';
import { ActorCreateRequestSchema } from './create/actorCreateRequest.schema';
import { ActorUpdateRequestSchema } from './update/actorUpdateRequest.schema';

export const ActorValidationSchemas: JoiRegisteredSchemas = {
  ActorGetAllRequest: ActorGetAllRequestSchema,
  ActorCreateRequest: ActorCreateRequestSchema,
  ActorUpdateRequest: ActorUpdateRequestSchema,
};
