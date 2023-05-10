import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PermissionsRepository } from './permissions.repository';
import { InsertResult } from 'typeorm';
import { Permission } from '../entities/permission.entity';
import { CreatePermissionDto } from '../../common/dtos/permissions/create-permission.dto';
import { UpdatePermissionDto } from '../../common/dtos/permissions/update-permission.dto';

@Injectable()
export class PermissionsService {
  private NotCreatedExceptionMessage = 'Permission is not created';
  private NotFoundExceptionMessage = 'Permission is not found';

  constructor(private readonly permissionsRepository: PermissionsRepository) {}

  async create(createPermissionDto: CreatePermissionDto): Promise<Permission> {
    const createdPermission = await this.permissionsRepository.createPermission(createPermissionDto);

    if (!this.getIdentifierId(createdPermission)) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdPermission.raw[0];
  }

  findAll(): Promise<Permission[]> {
    return this.permissionsRepository.findAllPermissions();
  }

  findAllPermissionsByObject(objectId: number): Promise<Permission[]> {
    return this.permissionsRepository.findAllPermissionsByObject(objectId);
  }

  findAllWithObjects(): Promise<Permission[]> {
    return this.permissionsRepository.findAllPermissionsWithObjects();
  }

  findAllPermissionsOfRole(role_id: number): Promise<Permission[]> {
    return this.permissionsRepository.findAllPermissionsOfRole(role_id);
  }

  findAllPermissionActions(): Promise<Partial<Permission>[]> {
    return this.permissionsRepository.findAllPermissionActions();
  }

  async findById(id: number): Promise<Permission> {
    const permissionExist = await this.permissionsRepository.findPermissionById(id);

    if (!permissionExist) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return permissionExist;
  }

  async update(id: number, updatePermissionDto: UpdatePermissionDto): Promise<Permission> {
    const updatedPermission = await this.permissionsRepository.updatePermission(id, updatePermissionDto);

    if (!updatedPermission.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedPermission.raw[0];
  }

  async delete(id: number): Promise<Permission> {
    const deletedPermission = await this.permissionsRepository.deletePermission(id);

    if (!deletedPermission.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedPermission.raw[0];
  }

  getIdentifierId(result: InsertResult) {
    return result.identifiers[0].id == -1 ? false : true;
  }
}
