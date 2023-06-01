import { JwtPayload } from './../interfaces/jwt-payload.interface';
import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtUtil } from '../utils/jwt-util';
import { Request, Response, NextFunction } from 'express';
import { TokenManagementService } from '../providers/token-management/token-management.service';


interface CustomRequest extends Request {
  jwtPayload?: JwtPayload;
}

@Injectable()
export class JwtTokenVerifierMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService, private tokenManagementService: TokenManagementService) {}

  use(request: CustomRequest, response: Response, next: NextFunction) {
    const token = JwtUtil.extractTokenFromHeader(request) as string;

    if (this.tokenManagementService.isTokenBlacklisted(token)) {
      throw new HttpException('Invalid JWT token', HttpStatus.UNAUTHORIZED);
    }

    if (!token) {
      throw new HttpException('Missing JWT token', HttpStatus.UNAUTHORIZED);
    }

    try {
      const payload: JwtPayload = this.jwtService.verify(token, { secret: 'secret' });
      request.jwtPayload = payload; // Add the JWT payload to the request object
      return next();
    } catch (error) {
      throw new HttpException('Invalid JWT token', HttpStatus.UNAUTHORIZED);
    }
  }
}
