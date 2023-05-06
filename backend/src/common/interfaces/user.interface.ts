import { IAdmin } from './admin.interface';
import { IEmployee } from './employee.interface';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  city: string;
  birthdate: Date;
  gender: string;
  userDetails?: IAdmin | IEmployee;
  roleId: number;
  createdAt: Date;
  updatedAt: Date;
}
