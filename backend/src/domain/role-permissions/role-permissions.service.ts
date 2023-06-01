import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RolePermissionsRepository } from './role-permissions.repository';
import { CreateRolePermissionsDto } from '../../common/dtos/role-permissions/create-role-permissions.dto';
import { RolePermissions } from '../entities/role-permission.entity';
import { UpdateRolePermissionsDto } from '../../common/dtos/role-permissions/update-role-permissions.dto';
import { InsertResult } from 'typeorm';


@Injectable()
export class RolePermissionsService {
  private NotFoundExceptionMessage = 'RolePermissions is not found';
  private NotCreatedExceptionMessage = 'RolePermissions is not created';

  constructor(private rolePermissionsRepository: RolePermissionsRepository) {}

  async create(createRolePermissionsDto: CreateRolePermissionsDto): Promise<RolePermissions> {
    const createdRolePermissions = await this.rolePermissionsRepository.createRolePermissions(createRolePermissionsDto);

    if (this.getIdentifierId(createdRolePermissions)) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.BAD_REQUEST);
    }
    return createdRolePermissions.raw[0];
  }

  findAll(): Promise<RolePermissions[]> {
    return this.rolePermissionsRepository.findAllRolePermissions();
  }

  async findById(id: number): Promise<RolePermissions> {
    const rolePermissions = await this.rolePermissionsRepository.findRolePermissionsById(id);

    if (!rolePermissions) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return rolePermissions;
  }

  async update(id: number, updateRolePermissionsDto: UpdateRolePermissionsDto): Promise<RolePermissions> {
    const updatedRolePermissions = await this.rolePermissionsRepository.updateRolePermissions(id, updateRolePermissionsDto);

    if (!updatedRolePermissions.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedRolePermissions.raw[0];
  }

  async delete(id: number): Promise<RolePermissions> {
    const deletedRolePermissions = await this.rolePermissionsRepository.deleteRolePermissions(id);

    if (!deletedRolePermissions.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedRolePermissions.raw[0];
  }

  getIdentifierId(result: InsertResult): boolean {
    return result.identifiers[0].id == -1 ? false : true;
  }
}
