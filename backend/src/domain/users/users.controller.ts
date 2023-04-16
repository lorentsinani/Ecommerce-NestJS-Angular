import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UsePipes, UseFilters, ValidationPipe, Delete, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from '../../common/dtos/users/update-user.dto';

import { RemovePasswordInterceptor } from '../../common/interceptors/remove-password.interceptor';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';

@Controller('users')
@UseInterceptors(RemovePasswordInterceptor)
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('User'))
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.delete(id);
  }
}
