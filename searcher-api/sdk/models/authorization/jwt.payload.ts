import { UserRoles } from '../enums/userRoles';

export interface IJwtPayload {
  sub: number;
  email: string;
  role: UserRoles;
  iat?: number;
  exp?: number;
  jti?: string;
}
