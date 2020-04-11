import { Controller, Get, Query } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActoreGetAllRequest } from './dto/getAll/actorGetAll.request';
import { ActorGetAllResponse } from './dto/getAll/actorGetAll.response';

@Controller('actor')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Get()
  async getAll(@Query() model: ActoreGetAllRequest): Promise<ActorGetAllResponse> {
    const { limit, offset, search } = model;

    const { totalCount, items } = await this.actorService.getAll(limit, offset, search);

    return new ActorGetAllResponse(totalCount, items);
  }
}
