import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsePipes, UseFilters, Put, ValidationPipe, Delete, UseInterceptors } from '@nestjs/common';
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

  @Get()
  async findAllUsers(): Promise<IUser[]> {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  async findUser(@Param('id', ParseIntPipe) id: number): Promise<IUser> {
    return this.usersService.findUserById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter())
  async createUser(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.usersService.createUser(createUserDto);
  }

  @Put(':id')
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
