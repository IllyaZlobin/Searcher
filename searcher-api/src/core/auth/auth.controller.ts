import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { User } from 'sdk';
import { AuthService } from './auth.service';
import { UserRegisterRequest } from './dto/register/userRegister.request';
import { UserLoginRequest } from './dto/login/userLogin.request';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(@Body() model: UserRegisterRequest): Promise<User> {
    const result = await this.authService.register(model);
    return result;
  }

  @Post('/login')
  async login(@Body() model: UserLoginRequest, @Res() res: Response): Promise<Response> {
    const loginResult = await this.authService.login(model);
    // const response = new UserLoginResponse(loginResult.message, loginResult.email);
    // return response;
    res.set('Authorization', `Bearer ${loginResult.access_token}`);
    res.send({
      succes: true,
      token: loginResult.access_token,
    });

    return res;
  }
}
