import { IRole } from './role.interface';

export interface AccessTokenPayload {
  sub: number;
  firstName: string;
  lastName: string;
  email: string;
  role: IRole;
}
