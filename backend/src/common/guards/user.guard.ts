import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { TokenVerifierCustomRequest } from '../interfaces/jwt-payload.interface';
import { UserRole } from '../constants/enums/user-rol.enum';

@Injectable()
export class CustomerGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // console.log('Guard being executed');
    // const request = context.switchToHttp().getRequest() as TokenVerifierCustomRequest;
    // const payload = request.jwtPayload;
    // return (payload && payload.user.role === UserRole.Customer) as boolean;
    return true;
  }
}
