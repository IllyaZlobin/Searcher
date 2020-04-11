import { JwtService } from '@nestjs/jwt';

const jwtService = new JwtService({ secret: 'searcher-secret' });

export const getPayload = (token: string) => {
  return jwtService.decode(token);
};
