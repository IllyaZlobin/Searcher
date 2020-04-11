import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfoVw } from 'sdk/orm/views/userInfo.view';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from '../../../sdk/orm/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserInfoVw])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
