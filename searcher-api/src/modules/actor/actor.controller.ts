import {
  Controller,
  Get,
  Query,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ActorService } from './actor.service';
import { ActorGetAllRequest } from './dto/getAll/actorGetAll.request';
import { ActorGetAllResponse } from './dto/getAll/actorGetAll.response';
import { ActorGetByIdResponse } from './dto/getById/actorGetById.response';
import { ActorCreateRequest } from './dto/create/actorCreate.request';
import { ActorCreateResponse } from './dto/create/actorCreate.response';
import { ActorUpdateResponse } from './dto/update/actorUpdate.response';
import { ActorUpdateRequest } from './dto/update/actorUpdate.request';

@ApiTags('actor')
@Controller('actor')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Get()
  async getAll(@Query() model: ActorGetAllRequest): Promise<ActorGetAllResponse> {
    const { totalCount, items } = await this.actorService.getAll(model);

    return new ActorGetAllResponse(totalCount, items);
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) actorId: number): Promise<ActorGetByIdResponse> {
    const actor = await this.actorService.getById(actorId);

    return new ActorGetByIdResponse(actor);
  }

  @Post()
  async create(@Body() model: ActorCreateRequest): Promise<ActorCreateResponse> {
    const actor = await this.actorService.create(model);

    return new ActorCreateResponse(actor);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) actorId: number,
    @Body() model: ActorUpdateRequest,
  ): Promise<ActorUpdateResponse> {
    const actor = await this.actorService.update(actorId, model);

    return new ActorUpdateResponse(actor);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) actorId: number): Promise<void> {
    return this.actorService.delete(actorId);
  }
}
