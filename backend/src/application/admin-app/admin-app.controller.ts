import { Controller, Post } from '@nestjs/common';
import { AdminAppService } from './admin-app.service';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';
import { CreateAdminDto } from '../../common/dtos/admin/create-admin.dto';
import { Body } from '@nestjs/common';
@Controller('admin-app')
export class AdminAppController {
  constructor(private readonly adminAppService: AdminAppService) {}
  @Post()
  async createUserAndAdmin(@Body() body: { userData: CreateUserDto; adminData: CreateAdminDto }) {
    const { userData, adminData } = body;
    return this.adminAppService.createUserAdmin(userData, adminData);
  }
}

