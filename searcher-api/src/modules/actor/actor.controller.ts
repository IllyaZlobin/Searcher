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
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'sdk/nest/guards/role.guard';
import { Role } from 'sdk/nest/decorators';
import { UserRoles } from 'sdk';
import { ActorService } from './actor.service';
import { ActorGetAllRequest } from './dto/getAll/actorGetAll.request';
import { ActorGetAllResponse } from './dto/getAll/actorGetAll.response';
import { ActorGetByIdResponse } from './dto/getById/actorGetById.response';
import { ActorCreateRequest } from './dto/create/actorCreate.request';
import { ActorCreateResponse } from './dto/create/actorCreate.response';
import { ActorUpdateResponse } from './dto/update/actorUpdate.response';
import { ActorUpdateRequest } from './dto/update/actorUpdate.request';

@ApiTags('actor')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'), RoleGuard)
@Controller('actor')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Get()
  @Role(UserRoles.Admin)
  async getAll(@Query() model: ActorGetAllRequest): Promise<ActorGetAllResponse> {
    const { totalCount, items } = await this.actorService.getAll(model);

    return new ActorGetAllResponse(totalCount, items);
  }

  @Get(':id')
  @Role(UserRoles.Admin)
  async getById(@Param('id', ParseIntPipe) actorId: number): Promise<ActorGetByIdResponse> {
    const actor = await this.actorService.getById(actorId);

    return new ActorGetByIdResponse(actor);
  }

  @Post()
  @Role(UserRoles.Admin)
  async create(@Body() model: ActorCreateRequest): Promise<ActorCreateResponse> {
    const actor = await this.actorService.create(model);

    return new ActorCreateResponse(actor);
  }

  @Put(':id')
  @Role(UserRoles.Admin)
  async update(
    @Param('id', ParseIntPipe) actorId: number,
    @Body() model: ActorUpdateRequest,
  ): Promise<ActorUpdateResponse> {
    const actor = await this.actorService.update(actorId, model);

    return new ActorUpdateResponse(actor);
  }

  @Delete(':id')
  @Role(UserRoles.Admin)
  async delete(@Param('id', ParseIntPipe) actorId: number): Promise<void> {
    return this.actorService.delete(actorId);
  }
}
