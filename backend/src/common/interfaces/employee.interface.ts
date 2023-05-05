import { IUser } from './user.interface';

export interface IEmployee {
  user: IUser;
  hireDate: Date;
  jobTitle: string;
  address: string;
  photoUrl: string;
  salary: number;
}
