import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { UserType } from '../constants/enums/user-type.enum';
import { TokenVerifierCustomRequest } from '../interfaces/jwt-payload.interface';

@Injectable()
export class CustomerGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest() as TokenVerifierCustomRequest;
    const user = request.jwtPayload;
    return (user && user.role === UserType.Customer) as boolean;
  }
}
