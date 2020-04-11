import { Injectable, Inject } from '@nestjs/common';
import { ValidationException } from 'sdk/nest/exceptions/validation.exception';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'sdk/orm/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { UserLoginRequest } from './dto/login/userLogin.request';
import { UserRegisterRequest } from './dto/register/userRegister.request';
import { checkEmail, hashPasswordAndGet, checkPassword } from '../helpers';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
    @Inject(REQUEST) private request: Request,
  ) {}

  async register(registerReq: UserRegisterRequest): Promise<User> {
    const { email } = registerReq;
    const check = await checkEmail(email);
    if (check) {
      throw new ValidationException('Email is taken by another user', ['email']);
    }
    const user = await hashPasswordAndGet(registerReq);

    const token = await this.genereTokenAsync(user.id, user.email, user.password);
    const refreshToken = await this.genereRefreshTokenAsync(user.id, user.email, user.password);

    user.token = token;
    user.refresh_token = refreshToken;

    return this.userRepository.save(user);
  }

  async login(loginRequest: UserLoginRequest): Promise<{ access_token: string }> {
    const result = await this.validateUser(loginRequest);
    const { user } = result;

    // const authHeader = this.request.headers.authorization;

    if (!user.token) {
      user.token = await this.genereTokenAsync(user.id, user.email, user.password);
    }

    if (!user.refresh_token) {
      user.refresh_token = await this.genereRefreshTokenAsync(user.id, user.email, user.password);
    }

    // const decodeToken = this.jwtService.decode(user.token);
    // const { exp } = decodeToken;
    // console.log(new Date(1000 * exp).toUTCString());

    return { access_token: user.token };
  }

  private async genereTokenAsync(id: number, email: string, password: string): Promise<string> {
    const payload = { id, email, password };
    const token = await this.jwtService.signAsync(payload, { expiresIn: '5d' });
    return token;
  }

  private async genereRefreshTokenAsync(
    id: number,
    email: string,
    password: string,
  ): Promise<string> {
    const payload = { id, email, password };
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '30d',
    });
    return refreshToken;
  }

  private async validateUser(
    loginRequest: UserLoginRequest,
  ): Promise<{ message: string; user: User }> {
    const { email, password } = loginRequest;

    const user = await checkEmail(email);
    if (!user) {
      throw new ValidationException('Email is invalid', ['email']);
    }

    const passwordCheck = await checkPassword(password, user.password);
    if (!passwordCheck) {
      throw new ValidationException('Password is invalid', ['password']);
    }

    return { message: 'Success login', user };
  }
}
