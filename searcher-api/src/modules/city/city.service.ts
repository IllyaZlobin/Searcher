import { Injectable } from '@nestjs/common';
import { Crud } from 'sdk/models/common/crud';
import { Counted } from 'sdk/nest/dtos';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from 'sdk';
import { Repository } from 'typeorm';
import { isEntityExist } from 'sdk/nest/helpers/isEntityExist';
import { CityDto } from './dto/common/city.dto';

@Injectable()
export class CityService implements Crud<CityDto> {
  constructor(@InjectRepository(City) private readonly cityRepository: Repository<City>) {}

  async getAll(...args: any[]): Promise<Counted<CityDto>> {
    const [{ limit, offset }] = args;

    const [entities, totalCount] = await this.cityRepository.findAndCount({
      take: limit,
      skip: offset,
    });

    return new Counted(totalCount, entities);
  }

  async getById(id: number): Promise<CityDto> {
    await isEntityExist(id, this.cityRepository);

    return this.cityRepository.findOne(id);
  }

  async create(model: CityDto): Promise<CityDto> {
    const entity = { ...model, id: 0 };

    return this.cityRepository.save(entity);
  }

  async update(id: number, model: CityDto): Promise<CityDto> {
    await isEntityExist(id, this.cityRepository);

    const entity = { ...model, id };

    return this.cityRepository.save(entity);
  }

  async delete(id: number): Promise<void> {
    await isEntityExist(id, this.cityRepository);

    await this.cityRepository.delete(id);
  }
}
