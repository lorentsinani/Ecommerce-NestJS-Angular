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
  async create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<IUser[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<IUser> {
    return this.usersService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe(), new NullDtoValidationPipe())
  @UseFilters(new DuplicateKeyExceptionFilter())
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto): Promise<IUser> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<IUser> {
    return this.usersService.delete(id);
  }
}
