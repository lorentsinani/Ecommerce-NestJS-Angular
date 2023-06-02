import { User } from './user.interface';

export interface JwtPayload {
  sub: number;
  user: Partial<User>;
  iat?: number;
  exp?: number;
}
