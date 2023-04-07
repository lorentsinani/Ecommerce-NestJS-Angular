import { IUser } from './user.interface';

export interface IEmployee {
  id: number;
  user: IUser;
  hire_date: Date;
  job_title: string;
  address: string;
  photo_url: string;
  salary: number;
}
