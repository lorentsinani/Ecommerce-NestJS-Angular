import { IAdmin } from '../../interfaces/admin.interface';
import { IEmployee } from '../../interfaces/employee.interface';
import { IUser } from '../../interfaces/user.interface';

export type UserEmployeeData = {
  user: IUser;
  employee: IEmployee;
};

export type UserAdminData = {
  user: IUser;
  admin: IAdmin;
};
