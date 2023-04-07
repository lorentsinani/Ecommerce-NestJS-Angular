import { UserType } from '../constants/enums/user-type.enum';

export interface IUser {
  id: number;
  user_type: UserType;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  country: string;
  city: string;
  birthdate: Date;
  gender: string;
  created_at: Date;
  updated_at: Date;
}
