export class LoginResponse {
  accessToken: string;
  tokenType?: string = 'bearer';
  expiresIn: number | string;
  refreshToken?: string;
  type?: string;

  constructor(
    accessToken?: string,
    tokenType?: string,
    expiresIn?: number | string,
    refreshToken?: string,
    type?: string,
  ) {
    this.accessToken = accessToken;
    this.tokenType = tokenType;
    this.expiresIn = expiresIn;
    this.refreshToken = refreshToken;
    this.type = type;
  }
}
