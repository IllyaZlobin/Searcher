import { Injectable } from '@nestjs/common';
import { sign, SignOptions, verify } from 'jsonwebtoken';
import { ConfigService } from 'src/modules/shared/configuration/configService';
import { NotFoundException, UserFriendlyException, RefreshToken, IJwtPayload } from 'sdk';
import { randomBytes } from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import * as moment from 'moment';
import { LoginResponse } from '../dto/login/login.response';

@Injectable()
export class TokenService {
  private readonly jwtOptions: SignOptions;
  private readonly jwtKey: string;
  private refreshTokenTtl: number;
  private expiresInDefault: string | number;
  private readonly usersExpired: number[] = [];

  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(RefreshToken)
    private readonly refreshTokenRepositry: Repository<RefreshToken>,
  ) {
    this.expiresInDefault = this.configService.get('jwt.expiresIn');
    this.jwtOptions = { expiresIn: this.expiresInDefault };
    this.jwtKey = this.configService.get('jwt.secretKey');
    this.refreshTokenTtl = this.configService.get('jwt.refreshTokenExpiresIn');
  }

  async getAccessTokenFromRefreshToken(
    refreshToken: string,
    oldAccessToken: string,
  ): Promise<LoginResponse> {
    try {
      // check if refresh token exist in database
      const token = await this.refreshTokenRepositry.findOne({
        where: { value: refreshToken },
      });
      const currentDate = new Date();
      if (!token) {
        throw new NotFoundException('Refresh token not found', ['refreshToken']);
      }
      if (token.expiresAt < currentDate) {
        throw new NotFoundException('Refresh token expired', ['refreshToken']);
      }
      // Refresh token is still valid
      // Generate new access token
      const oldPayload = await this.validateToken(oldAccessToken, true);
      const payload = {
        sub: oldPayload.sub,
        role: oldPayload.role,
      };
      const accessToken = await this.createAccessToken(payload);
      // Remove old refresh token and generate a new one
      await this.refreshTokenRepositry.delete(token.id);

      accessToken.refreshToken = await this.createRefreshToken(oldPayload.sub);

      return new LoginResponse(
        accessToken.accessToken,
        'Bearer',
        accessToken.expiresIn,
        accessToken.refreshToken,
      );
    } catch (error) {
      throw new UserFriendlyException(error);
    }
  }

  async createAccessToken(payload: IJwtPayload): Promise<LoginResponse> {
    // If expires is negative it means that token should not expire
    const options = this.jwtOptions;
    // Generate unique id for this token
    options.jwtid = uuidv4();
    const signedPayload = sign(payload, this.jwtKey, options);
    const token: LoginResponse = {
      accessToken: signedPayload,
      expiresIn: this.expiresInDefault,
    };

    return new LoginResponse(token.accessToken, 'Bearer', token.expiresIn);
  }

  async createRefreshToken(userId: number): Promise<string> {
    const token = new RefreshToken();

    const refreshToken = randomBytes(64).toString('hex');

    token.userId = userId;
    token.value = refreshToken;
    token.expiresAt = moment()
      .add(this.refreshTokenTtl, 'd')
      .toDate();

    await this.refreshTokenRepositry.save({ ...token, id: 0 });

    return refreshToken;
  }

  async deleteRefreshTokenForUser(userId: number): Promise<any> {
    await this.refreshTokenRepositry
      .createQueryBuilder()
      .delete()
      .where('userId = :id', { id: userId })
      .execute();
    await this.revokeTokenForUser(userId);
  }

  async deleteRefreshToken(userId: number, value: string): Promise<any> {
    await this.refreshTokenRepositry
      .createQueryBuilder()
      .delete()
      .where('value = :refreshToken', { refreshToken: value })
      .execute();
    await this.revokeTokenForUser(userId);
  }

  async decodeAndValidateJWT(token: string): Promise<any> {
    if (token) {
      try {
        const payload = await this.validateToken(token);
        return await this.validatePayload(payload);
      } catch (error) {
        return null;
      }
    }
    return null;
  }

  async validatePayload(payload: IJwtPayload): Promise<any> {
    const tokenBlacklisted = await this.isBlackListed(payload.sub, payload.exp);
    if (!tokenBlacklisted) {
      return {
        id: payload.sub,
        role: payload.role,
      };
    }
    return null;
  }

  private async validateToken(token: string, ignoreExpiration = false): Promise<IJwtPayload> {
    return verify(token, this.configService.get('jwt.secretKey'), {
      ignoreExpiration,
    }) as IJwtPayload;
  }

  private async isBlackListed(id: number, expire: number): Promise<boolean> {
    return this.usersExpired[id] && expire < this.usersExpired[id];
  }

  private async revokeTokenForUser(userId: number): Promise<any> {
    this.usersExpired[userId] = moment()
      .add(this.expiresInDefault, 's')
      .unix();
  }
}
