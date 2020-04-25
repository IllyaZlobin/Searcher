/* eslint-disable import/no-cycle */
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, RefreshToken } from 'sdk/orm/entities';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../../modules/user/user.module';
import { TokenService } from './token/token.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.contoller';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, RefreshToken]),
    forwardRef(() => UserModule),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, TokenService],
  exports: [PassportModule.register({ defaultStrategy: 'jwt' }), AuthService, TokenService],
})
export class AuthModule {}
