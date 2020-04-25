/* eslint-disable import/no-cycle */
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfoVw } from 'sdk/orm/views/userInfo.view';
import { AuthModule } from 'src/core/auth/auth.module';
import { UserController } from './user.controller';
import { User } from '../../../sdk/orm/entities/user.entity';
import { UserService } from './user.service';

@Module({
  imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([User, UserInfoVw])],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
