import { Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/user/user.service';
import { IJwtPayload } from 'sdk/models/authorization';
import { TokenService } from './token/token.service';
import { LoginRequest } from './dto/login/login.request';
import { LoginResponse } from './dto/login/login.response';

@Injectable()
export class AuthService {
  constructor(
    private readonly tokenService: TokenService,
    private readonly userService: UserService,
  ) {}

  async login(credentials: LoginRequest): Promise<LoginResponse> {
    const loginResults = await this.userService.login(credentials);

    if (!loginResults) {
      return null;
    }

    const payload: IJwtPayload = {
      sub: loginResults.id,
      role: loginResults.role,
      email: loginResults.email,
    };

    const loginResponse: LoginResponse = await this.tokenService.createAccessToken(payload);

    // We save the user's refresh token
    const token = {
      userId: loginResults.id,
    };
    const refresh = await this.tokenService.createRefreshToken(token.userId);

    loginResponse.refreshToken = refresh;

    return loginResponse;
  }

  async logout(userId: number, refreshToken: string): Promise<any> {
    await this.tokenService.deleteRefreshToken(userId, refreshToken);
  }

  /**
   * Logout the user from all the devices by invalidating all his refresh tokens
   * @param userId The user id to logout
   */
  async logoutFromAll(userId: number): Promise<any> {
    await this.tokenService.deleteRefreshTokenForUser(userId);
  }
}
