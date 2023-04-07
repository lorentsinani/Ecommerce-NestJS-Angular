import { IUser } from './user.interface';

export interface IEmployee {
  id: number;
  user: IUser;
  hire_date: Date;
  job_title: string;
  address: string | null;
  photo_url: string | null;
  salary: number | null;
}
