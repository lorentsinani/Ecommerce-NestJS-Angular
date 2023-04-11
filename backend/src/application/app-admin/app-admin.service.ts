import { CreateUserDto } from '../../common/dtos/users/create-user.dto';
import { IAdmin } from '../../common/interfaces/admin.interface';
import { IUser } from '../../common/interfaces/user.interface';
import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from '../../common/dtos/admin/create-admin.dto';
import { AdminService } from '../../domain/admin/admin.service';
import { UsersService } from '../../domain/users/users.service';
import { CreateEmployeeDto } from '../../common/dtos/employees/create-employee';
import { IEmployee } from '../../common/interfaces/employee.interface';
import { EmployeesService } from '../../domain/employees/employees.service';
import { UpdateAdminDto } from '../../common/dtos/admin/update-admin.dto';
import { UpdateUserDto } from '../../common/dtos/users/update-user.dto';
import { UpdateEmployeeDto } from '../../common/dtos/employees/update-employee';
import { UserAdminData, UserEmployeeData } from '../../common/constants/types/combined-user.types';

@Injectable()
export class AppAdminService {
  constructor(
    private readonly usersService: UsersService,
    private readonly adminService: AdminService,
    private readonly employeeService: EmployeesService
  ) {}

  async createAdmin(userDto: CreateUserDto, adminDto: CreateAdminDto): Promise<UserAdminData> {
    await this.usersService.findByEmail(userDto.email);
    const userData = await this.usersService.create(userDto);
    const adminData = await this.adminService.create({ ...adminDto, user_id: userData.id });

    return this.getAdminCombinedData(userData, adminData);
  }

  async createEmployee(userDto: CreateUserDto, employeeDto: CreateEmployeeDto): Promise<UserEmployeeData> {
    const userData = await this.usersService.create(userDto);
    const employeeData = await this.employeeService.create({ ...employeeDto, user_id: userData.id });

    return this.getEmployeeCombinedData(userData, employeeData);
  }

  async updateAdmin(id: number, userDto: UpdateUserDto, adminDto: UpdateAdminDto): Promise<UserAdminData> {
    const userData = await this.usersService.update(id, userDto);
    const adminData = await this.adminService.update(id, adminDto);

    return this.getAdminCombinedData(userData, adminData);
  }

  async updateEmployee(id: number, userDto: UpdateUserDto, employeeDto: UpdateEmployeeDto): Promise<UserEmployeeData> {
    const userData = await this.usersService.update(id, userDto);
    const employeeData = await this.employeeService.update(id, employeeDto);

    return this.getEmployeeCombinedData(userData, employeeData);
  }

  async findAllAdmins(): Promise<IAdmin[]> {
    return this.adminService.findAll();
  }
  async findAllEmployees() {
    return this.employeeService.findAll();
  }

  async findAdminById(id: number): Promise<IAdmin> {
    return this.adminService.findById(id);
  }

  async findEmployeeById(id: number): Promise<IEmployee> {
    return this.employeeService.findById(id);
  }

  async deleteAdmin(id: number): Promise<IUser> {
    return this.usersService.delete(id);
  }
  async deleteEmployee(id: number): Promise<IUser> {
    return this.usersService.delete(id);
  }

  getEmployeeCombinedData(user: IUser, employee: IEmployee) {
    return { user, employee };
  }

  getAdminCombinedData(user: IUser, admin: IAdmin) {
    return { user, admin };
  }
}
