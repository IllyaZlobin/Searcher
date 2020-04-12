import { ActorDto } from '../common/actor.dto';

export class ActorGetByIdResponse {
  actor: ActorDto;

  constructor(actor?: ActorDto) {
    this.actor = actor;
  }
}
