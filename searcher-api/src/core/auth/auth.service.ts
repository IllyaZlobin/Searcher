import { Injectable, Inject } from '@nestjs/common';
import { checkEmail, hashPasswordAndGet, checkPassword } from '../helpers';
import { UserRegisterRequest } from './dto/register/userRegister.request';
import { ValidationException } from 'src/common/exceptions/validation.exception';
import { UserLoginRequest } from './dto/login/userLogin.request';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/common/db/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>, 
    private jwtService: JwtService,
    @Inject(REQUEST) private request: Request
    ) {}  

  async register(registerReq: UserRegisterRequest) {
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

    return await this.userRepository.save(user);
  }


  async login(loginRequest: UserLoginRequest) {

    const result = await this.validateUser(loginRequest);
    const { user } = result;

    const authHeader = this.request.headers.authorization;

    if (!user.token) {
      user.token = await this.genereTokenAsync(user.id, user.email, user.password);  
    }

    if (!user.refresh_token) {
      user.refresh_token = await this.genereRefreshTokenAsync(user.id, user.email, user.password); 
    }

    const decodeToken = this.jwtService.decode(user.token);
    const exp = (decodeToken['exp'])
    console.log(new Date(1000*exp).toUTCString());

    return { access_token: user.token }
    
  }
  
  private async genereTokenAsync(id: number, email: string, password: string) {
    const payload = { id: id, email: email, password: password }
    const token = await this.jwtService.signAsync(payload, {expiresIn: '5d'});
    return token;
  }

  private async genereRefreshTokenAsync(id: number, email: string, password: string) {
    const payload = { id: id, email: email, password: password }
    const refreshToken = await this.jwtService.signAsync(payload, {expiresIn: '30d'});
    return refreshToken;
  }

  private async validateUser (loginRequest: UserLoginRequest): Promise<{ message: string, user: User }> {
    const { email, password } = loginRequest;
  
    const user = await checkEmail(email);
    if (!user) {
      throw new ValidationException('Email is invalid', ['email']);
    }
   
    const passwordCheck = await checkPassword(password, user.password);
    if (!passwordCheck) {
      throw new ValidationException('Password is invalid', ['password']);
    }
  
    return { message: 'Success login', user: user }
  } 
}
