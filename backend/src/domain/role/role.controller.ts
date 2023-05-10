import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { RoleService } from './role.service';
import { UpdateRoleDto } from '../../common/dtos/role/update-role.dto';
import { CreateRoleDto } from '../../common/dtos/role/create-role.dto';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';

@Controller('role')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Permission'))
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.roleService.findById(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(id, updateRoleDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.roleService.delete(id);
  }
}
