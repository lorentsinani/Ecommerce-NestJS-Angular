import { IAdmin } from './../../common/interfaces/admin.interface';
import { IUser } from './../../common/interfaces/user.interface';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';
import { CreateAdminDto } from '../../common/dtos/admin/create-admin.dto';
import { AdminService } from '../../domain/admin/admin.service';
import { UsersService } from '../../domain/users/users.service';

@Injectable()
export class AdminAppService {
  constructor(private readonly usersService: UsersService, private readonly adminService: AdminService) {}

  async createUserAdmin(
    createUserDto: CreateUserDto,
    createAdminDto: CreateAdminDto,
  ): Promise<{ user: IUser; admin: IAdmin }> {
    const userData = await this.usersService.create(createUserDto);

    const adminData = await this.adminService.create({ ...createAdminDto, user_id: userData.id });

    const combinedData = {
      user: userData,
      admin: adminData,
    };

    return combinedData;
  }
}


