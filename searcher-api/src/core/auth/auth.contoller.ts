import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UnauthorizedException,
  Body,
  Get,
  Req,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ValidationException } from 'sdk/nest/exceptions';
import { ExtractJwt } from 'passport-jwt';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from 'sdk/nest/guards/role.guard';
import { Role, User } from 'sdk/nest/decorators';
import { UserRoles } from 'sdk/models';
import { AuthService } from './auth.service';
import { RefreshTokenRequest } from './dto/refreshToken/refreshToken.request';
import { LoginRequest } from './dto/login/login.request';
import { LoginResponse } from './dto/login/login.response';
import { TokenService } from './token/token.service';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService,
  ) {}

  @Post('login')
  @HttpCode(200)
  @ApiResponse({ status: HttpStatus.OK, type: LoginResponse })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, type: UnauthorizedException })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, type: ValidationException })
  async login(@Body() credentials: LoginRequest): Promise<LoginResponse> {
    const loginResults = await this.authService.login(credentials);

    if (!loginResults) {
      throw new UnauthorizedException('This email, password combination was not found');
    }

    return loginResults;
  }

  @Get('refreshToken')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Role(UserRoles.Admin, UserRoles.User)
  async refresh(@Req() req, @Query() model: RefreshTokenRequest): Promise<LoginResponse> {
    const { refreshToken } = model;
    const oldAccessToken = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
    const response = await this.tokenService.getAccessTokenFromRefreshToken(
      refreshToken,
      oldAccessToken,
    );

    return response;
  }

  // TODO need DTO!
  @Post('logout')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Role(UserRoles.Admin, UserRoles.User)
  @ApiBearerAuth()
  async logout(
    @User('id') userId: number,
    @Query('refresh_token') refreshToken?: string,
    @Query('from_all') fromAll = false,
  ): Promise<{ status: string }> {
    if (fromAll) {
      await this.authService.logoutFromAll(userId);
    } else {
      if (!refreshToken) {
        throw new ValidationException('Refresh token isn`t passed', ['refreshToken']);
      }
      await this.authService.logout(userId, refreshToken);
    }
    return { status: 'ok' };
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'), RoleGuard)
  @Role(UserRoles.User, UserRoles.Admin)
  @ApiBearerAuth()
  async userInfo(@User('id') user): Promise<any> {
    return user;
  }
}
