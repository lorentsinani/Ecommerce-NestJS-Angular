import { Injectable } from '@nestjs/common';
import { Producer } from '../entities/producer.entity';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { RolePermissions } from '../entities/role-permission.entity';
import { CreateRolePermissionsDto } from '../../common/dtos/role-permissions/create-role-permissions.dto';
import { UpdateRolePermissionsDto } from '../../common/dtos/role-permissions/update-role-permissions.dto';

@Injectable()
export class RolePermissionsRepository extends Repository<RolePermissions> {
  constructor(dataSource: DataSource) {
    super(Producer, dataSource.createEntityManager());
  }

  createRolePermissions(createRolePermissionDto: CreateRolePermissionsDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(RolePermissions).values(createRolePermissionDto).returning('*').execute();
  }

  findAllRolePermissions(): Promise<RolePermissions[]> {
    return this.find();
  }

  findRolePermissionsById(id: number): Promise<RolePermissions | null> {
    return this.createQueryBuilder('role_permissions').where('id = :id', { id }).getOne();
  }

  updateRolePermissions(id: number, updateRolePermissionDto: UpdateRolePermissionsDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(RolePermissions).set(updateRolePermissionDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteRolePermissions(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(RolePermissions).where('id = :id', { id }).returning('*').execute();
  }
}
