import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsePipes, UseFilters, ValidationPipe, Delete, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from '../../common/interfaces/user.interface';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';
import { UpdateUserDto } from '../../common/dtos/users/update-user.dto';

import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';
import { RemovePasswordInterceptor } from '../../common/interceptors/remove-password.interceptor';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';

@Controller('users')
@UseInterceptors(RemovePasswordInterceptor)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter())
  async createUser(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  async findAllUsers(): Promise<IUser[]> {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  async findUserById(@Param('id', ParseIntPipe) id: number): Promise<IUser> {
    return this.usersService.findUserById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe(), new NullDtoValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter())
  async updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto): Promise<IUser> {
    return this.usersService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<IUser> {
    return this.usersService.deleteUser(id);
  }
}
