import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { AuthService } from '../../application/auth/auth.service';

export interface CustomSocket extends Socket {
  jwtPayload?: JwtPayload;
}

@Injectable()
export class SocketJwtAuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const socket = context.switchToWs().getClient<Socket>() as CustomSocket;

    return this.authService.verifySocketJwtToken(socket);
  }
}
