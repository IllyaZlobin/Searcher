import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Actor, SortDirection, NotFoundException } from 'sdk';
import { Repository, Like } from 'typeorm';
import { Counted } from 'sdk/nest/dtos';
import { isEntityExist } from 'sdk/nest/helpers/isEntityExist';
import { Crud } from 'sdk/models/common/crud';
import { ActorDto } from './dto/common/actor.dto';

@Injectable()
export class ActorService implements Crud<ActorDto> {
  constructor(
    @InjectRepository(Actor)
    private readonly actorRepository: Repository<Actor>,
  ) {}

  async getAll(limit: number, offset: number, search?: string): Promise<Counted<Actor>> {
    let whereCondition;

    if (search) {
      whereCondition = {
        where: [{ name: Like(`%${search}%`) }, { birth_name: Like(`%${search}%`) }],
      };
    }

    const entities = await this.actorRepository.findAndCount({
      ...whereCondition,
      take: limit,
      skip: offset,
      order: {
        name: SortDirection.ASC,
        birth_name: SortDirection.ASC,
      },
    });

    const [actors, totalCount] = entities;

    return new Counted(totalCount, actors);
  }

  async getById(id: number): Promise<ActorDto> {
    const actor = this.actorRepository.findOne(id);

    if (!actor) {
      throw new NotFoundException(`User Id - ${id}, not foudn`, ['id']);
    }

    return actor;
  }

  async create(model: ActorDto): Promise<ActorDto> {
    const entity = { ...model, id: 0 };

    return this.actorRepository.save(entity);
  }

  async update(id: number, model: ActorDto): Promise<ActorDto> {
    await isEntityExist(id, this.actorRepository);

    const entity = { ...model, id };

    return this.actorRepository.save(entity);
  }

  async delete(id: number): Promise<void> {
    await isEntityExist(id, this.actorRepository);

    await this.actorRepository.delete(id);
  }
}
