import { IUser } from './user.interface';

export interface JwtPayload {
  sub: number;
  user: Partial<IUser>;
  iat?: number;
  exp?: number;
}

export interface TokenVerifierCustomRequest extends Request {
  jwtPayload?: JwtPayload;
}
