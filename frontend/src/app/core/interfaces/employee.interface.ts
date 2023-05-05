import { User } from './user.interface';

export interface Employee {
  user: User;
  hireDate: Date;
  jobTitle: string;
  address: string;
  photoUrl: string;
  salary: number;
}
