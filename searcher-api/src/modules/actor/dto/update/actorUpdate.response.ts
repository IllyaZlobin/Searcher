import { ActorDto } from '../common/actor.dto';

export class ActorUpdateResponse {
  actor: ActorDto;

  constructor(actor?: ActorDto) {
    this.actor = actor;
  }
}
