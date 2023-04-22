// import { JwtService } from '@nestjs/jwt';
// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Socket } from 'socket.io';
// import { JwtUtil } from '../utils/jwt-util';

// @Injectable()
// export class ChatTokenMiddleware implements NestMiddleware {
//   constructor(private readonly jwtService: JwtService) {}

//   async use(client: Socket, next: () => void) {
//     try {
//       const token = client?.handshake?.headers?.authorization.split(' ')[1];
//       const decoded = this.jwtService.verify(token);

//       client.sender_id = decoded.sender_id;

//       next();
//     } catch (error) {
//       console.log(error);
//       client.disconnect();
//     }
//   }
// }
