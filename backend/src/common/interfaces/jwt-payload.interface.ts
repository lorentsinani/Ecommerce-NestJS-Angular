export interface JwtPayload {
  sub: number;
  username: string;
  role: string;
  iat: number;
  exp: number;
}

export interface TokenVerifierCustomRequest extends Request {
  jwtPayload?: JwtPayload;
}
