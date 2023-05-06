import { IUser } from './user.interface';

export interface JwtPayload {
  user: IUser;
  iat: number;
  exp: number;
}

export interface TokenVerifierCustomRequest extends Request {
  jwtPayload?: JwtPayload;
}
