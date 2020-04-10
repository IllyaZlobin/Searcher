import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { User } from '../../common/db/entities/user.entity';
import { UserInfoVw } from 'src/common/db/views/userInfo.view';
import { NotFoundException } from 'src/common/exceptions/notFound.exception';


@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(UserInfoVw) private readonly userInfoRepository: Repository<UserInfoVw>,
  ){}

  async getAll(): Promise<[User[], number]> {
    return await  this.userRepository.findAndCount();
  }

  async getById(id: number) {

    const user = await this.userInfoRepository.findOne({ where: { id: id } });
    if (!user) throw new NotFoundException(`User not found!`, ['id']);
    
    return user;
  }
}
