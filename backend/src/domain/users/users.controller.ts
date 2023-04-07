import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  UseFilters,
  Put,
  ValidationPipe,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from '../../common/interfaces/user.interface';
import { CreateUserDto } from '../../common/dtos/users/create-user.dto';
import { UpdateUserDto } from '../../common/dtos/users/update-user.dto';
import { ValidationExceptionFilter } from '../../common/filters/validation-exception.filter';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<IUser[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<IUser> {
    return this.usersService.findOneById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @UseFilters(new ValidationExceptionFilter())
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  @UseFilters(new ValidationExceptionFilter())
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.usersService.delete(id);
  }
}
