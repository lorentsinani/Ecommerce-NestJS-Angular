import { Controller, UseFilters, UsePipes, ValidationPipe, Post, Get, Patch, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { QueryExceptionFilter } from '../../common/filters/query.exception.filter';
import { NullDtoValidationPipe } from '../../common/pipes/null-dto.validation.pipe';
import { Permission } from '../entities/permission.entity';
import { CreatePermissionDto } from '../../common/dtos/permissions/create-permission.dto';
import { UpdatePermissionDto } from '../../common/dtos/permissions/update-permission.dto';

@Controller('permissions')
@UsePipes(new ValidationPipe())
@UseFilters(new QueryExceptionFilter('Permission'))
export class PermissionsController {
  constructor(private permissionsService: PermissionsService) {}

  @Post()
  create(@Body() createPermissionDto: CreatePermissionDto): Promise<Permission> {
    return this.permissionsService.create(createPermissionDto);
  }

  @Get()
  findAll(): Promise<Permission[]> {
    return this.permissionsService.findAll();
  }

  @Get('object/:objectId')
  findAllPermissionsByObject(@Param('objectId', ParseIntPipe) objectId: number): Promise<Permission[]> {
    return this.permissionsService.findAllPermissionsByObject(objectId);
  }

  @Get('objects')
  findAllWithObjects(): Promise<Permission[]> {
    return this.permissionsService.findAllWithObjects();
  }

  @Get('actions')
  findAllPermissionActions(): Promise<Partial<Permission>[]> {
    return this.permissionsService.findAllPermissionActions();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Promise<Permission> {
    return this.permissionsService.findById(id);
  }

  @Patch(':id')
  @UsePipes(new NullDtoValidationPipe())
  update(@Param('id') id: number, @Body() updatePermissionDto: UpdatePermissionDto): Promise<Permission> {
    return this.permissionsService.update(id, updatePermissionDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<Permission> {
    return this.permissionsService.delete(id);
  }
}
