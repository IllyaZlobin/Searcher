import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../common/db/entities/user.entity';
import { UserInfoVw } from 'src/common/db/views/userInfo.view';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserInfoVw])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
