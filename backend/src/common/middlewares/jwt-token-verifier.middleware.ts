import { JwtPayload } from './../interfaces/jwt-payload.interface';
import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtUtil } from '../utils/jwt-util';
import { Request, Response, NextFunction } from 'express';

interface CustomRequest extends Request {
  jwtPayload?: JwtPayload;
}

@Injectable()
export class JwtTokenVerifierMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(request: CustomRequest, response: Response, next: NextFunction) {
    const token = JwtUtil.extractTokenFromHeader(request); // Extract token from header
    if (!token) {
      throw new HttpException('Missing JWT token', HttpStatus.UNAUTHORIZED);
    }

    try {
      const payload: JwtPayload = this.jwtService.verify(token, { secret: 'secret' });
      request.jwtPayload = payload; // Add the JWT payload to the request object
      next();
    } catch (error) {
      throw new HttpException('Invalid JWT token', HttpStatus.UNAUTHORIZED);
    }
  }
}
