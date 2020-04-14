import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Actor, SortDirection } from 'sdk';
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

  async getAll(...args: any[]): Promise<Counted<Actor>> {
    const [{ limit, offset, search }] = args;

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
    await isEntityExist(id, this.actorRepository);

    return this.actorRepository.findOne(id);
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
