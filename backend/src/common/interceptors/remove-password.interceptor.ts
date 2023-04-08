import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUser } from '../interfaces/user.interface';

@Injectable()
export class RemovePasswordInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: IUser | IUser[]) => {
        if (Array.isArray(data)) {
          return data.map((user: IUser) => {
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
          });
        } else if (data) {
          const { password, ...userWithoutPassword } = data;
          return userWithoutPassword;
        }
        return data;
      })
    );
  }
}
