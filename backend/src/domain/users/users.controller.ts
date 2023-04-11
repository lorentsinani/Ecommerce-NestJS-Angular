import { Body, Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { UsePipes, UseFilters, ValidationPipe, Delete, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from '../../common/interfaces/user.interface';
import { UpdateUserDto } from '../../common/dtos/users/update-user.dto';

import { DuplicateKeyExceptionFilter } from '../../common/filters/duplicate-key-exception.filter';
import { RemovePasswordInterceptor } from '../../common/interceptors/remove-password.interceptor';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';

@Controller('users')
@UseInterceptors(RemovePasswordInterceptor)
@UsePipes(new ValidationPipe())
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAllUsers(): Promise<IUser[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findUserById(@Param('id', ParseIntPipe) id: number): Promise<IUser> {
    return this.usersService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter('User'))
  async updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto): Promise<IUser> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<IUser> {
    return this.usersService.delete(id);
  }
}
