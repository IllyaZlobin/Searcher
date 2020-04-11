import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Actor, SortDirection } from 'sdk';
import { Repository, Like } from 'typeorm';
import { Counted } from 'sdk/nest/dtos';

@Injectable()
export class ActorService {
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
}
