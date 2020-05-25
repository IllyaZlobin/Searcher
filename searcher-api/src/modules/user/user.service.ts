import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInfoVw } from 'sdk/orm/views/userInfo.view';
import { NotFoundException } from 'sdk/nest/exceptions/notFound.exception';
import { LoginRequest } from 'src/core/auth/dto/login/login.request';
import { compare } from 'bcryptjs';
import { ICrud } from 'sdk';
import { Counted } from 'sdk/nest/dtos';
import { isEntityExist } from 'sdk/nest/helpers/isEntityExist';
import { hashPassword } from 'src/core/helpers';
import { UserDTO } from './dto/common/user.dto';
import { User } from '../../../sdk/orm/entities/user.entity';

@Injectable()
export class UserService implements ICrud<UserDTO> {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(UserInfoVw)
    private readonly userInfoRepository: Repository<UserInfoVw>,
  ) {}

  async getAll(...args: any[]): Promise<Counted<UserDTO>> {
    const [limit, offset] = args;
    const [entities, totalCount] = await this.userRepository.findAndCount({
      take: limit,
      skip: offset,
    });

    return new Counted(totalCount, entities);
  }

  async getById(id: number): Promise<UserDTO> {
    await isEntityExist(id, this.userRepository);

    return this.userRepository.findOne(id);
  }

  async create(model: UserDTO): Promise<UserDTO> {
    let { password } = model;

    password = await hashPassword(password);

    const entity: User = { ...model, password, id: 0 };

    return this.userRepository.save(entity);
  }

  async update(id: number, model: UserDTO): Promise<UserDTO> {
    await isEntityExist(id, this.userRepository);

    const entity = { ...model, id };

    return this.userRepository.save(entity);
  }

  async delete(id: number): Promise<void> {
    await isEntityExist(id, this.userRepository);

    await this.userRepository.delete(id);
  }

  async login(model: LoginRequest): Promise<UserDTO> {
    const { email, password } = model;

    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new NotFoundException('Wrong email', ['email']);
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new NotFoundException('Invalid password', ['password']);
    }

    return user;
  }
}
