import { ActorDto } from '../common/actor.dto';

export class ActorCreateResponse {
  actor: ActorDto;

  constructor(actor?: ActorDto) {
    this.actor = actor;
  }
}
