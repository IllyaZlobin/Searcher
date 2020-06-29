import { ActorDto } from '../common/actor.dto';

export class ActorGetAllResponse {
  totalCount: number;
  actors: ActorDto[];

  constructor(totalCount?: number, actors?: ActorDto[]) {
    this.totalCount = totalCount;
    this.actors = actors;
  }
}
