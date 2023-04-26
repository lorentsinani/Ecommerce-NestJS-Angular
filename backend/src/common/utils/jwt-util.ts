import { Socket } from 'socket.io';
import { Request } from 'express';
export class JwtUtil {
  static extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  static extractTokenFromSocketHeader(socket: Socket) {
    const [type, token] = socket.handshake.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
