import { Injectable } from '@nestjs/common';
import { ICrud, Country } from 'sdk';
import { InjectRepository } from '@nestjs/typeorm';
import { Counted } from 'sdk/nest/dtos';
import { Repository } from 'typeorm';
import { isEntityExist } from 'sdk/nest/helpers/isEntityExist';
import { CountryDto } from './dto/common/country.dto';

@Injectable()
export class CountryService implements ICrud<CountryDto> {
  constructor(@InjectRepository(Country) private readonly countryRepository: Repository<Country>) {}

  async getAll(...args: any[]): Promise<Counted<CountryDto>> {
    const [{ limit, offset }] = args;

    const [entities, totalCount] = await this.countryRepository.findAndCount({
      take: limit,
      skip: offset,
    });

    return new Counted(totalCount, entities);
  }

  async getById(id: number): Promise<CountryDto> {
    await isEntityExist(id, this.countryRepository);

    return this.countryRepository.findOne(id);
  }

  async create(model: CountryDto): Promise<CountryDto> {
    const entity = { ...model, id: 0 };

    return this.countryRepository.save(entity);
  }

  async update(id: number, model: CountryDto): Promise<CountryDto> {
    await isEntityExist(id, this.countryRepository);

    const entity = { ...model, id };

    return this.countryRepository.save(entity);
  }

  async delete(id: number): Promise<void> {
    await isEntityExist(id, this.countryRepository);

    await this.countryRepository.delete(id);
  }
}
