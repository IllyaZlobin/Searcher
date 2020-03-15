import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}
  
  async getAllInfo() {
    return await this.userRepository
    .createQueryBuilder('user')
    .select(['user', 'city.name', 'country.name'])
    .leftJoin('user.city', 'city', 'city.id = user.city')
    .leftJoin('user.country', 'country', 'country.id = user.country')
    .getMany();
  }
}
