import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInfoVw } from 'sdk/orm/views/userInfo.view';
import { NotFoundException } from 'sdk/nest/exceptions/notFound.exception';
import { User } from '../../../sdk/orm/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(UserInfoVw)
    private readonly userInfoRepository: Repository<UserInfoVw>,
  ) {}

  async getAll(): Promise<[User[], number]> {
    return this.userRepository.findAndCount();
  }

  async getById(id: number): Promise<UserInfoVw> {
    const user = await this.userInfoRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException(`User not found!`, ['id']);

    return user;
  }
}
