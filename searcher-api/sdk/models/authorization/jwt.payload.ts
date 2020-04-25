import { UserRoles } from '../enums/userRoles';

export interface IJwtPayload {
  sub: number;
  role: UserRoles;
  iat?: number;
  exp?: number;
  jti?: string;
}
