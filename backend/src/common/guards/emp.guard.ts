import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { UserType } from '../constants/enums/user-type.enum';
import { TokenVerifierCustomRequest } from '../interfaces/jwt-payload.interface';

@Injectable()
export class EmployeeGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest() as TokenVerifierCustomRequest;
    const user = request.jwtPayload;
    return (user && user.role === UserType.Employee) as boolean;
  }
}
