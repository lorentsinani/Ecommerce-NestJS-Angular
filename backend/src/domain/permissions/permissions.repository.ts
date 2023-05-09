import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Permission } from '../entities/permission.entity';

@Injectable()
export class PermissionsRepository extends Repository<Permission> {
  constructor(dataSource: DataSource) {
    super(Permission, dataSource.createEntityManager());
  }

  createPermission(permissionData: Partial<Permission>): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Permission).values(permissionData).returning('*').execute();
  }

  findAllPermissions(): Promise<Permission[]> {
    return this.find({ relations: ['object'] });
  }

  findAllPermissionsOfRole(role_id: number): Promise<Permission[]> {
    return this.createQueryBuilder('permission')
      .select(['permission.id', 'permission.action', 'object.name'])
      .innerJoin('permission.object', 'object')
      .innerJoin('permission.role_permissions', 'rp')
      .innerJoin('rp.role', 'role', 'role.id = :roleId', { roleId: role_id })
      .getMany();
  }

  findPermissionById(id: number): Promise<Permission | null> {
    return this.createQueryBuilder('permission').leftJoinAndSelect('permission.object', 'object').where('permission.id = :id', { id }).getOne();
  }

  findAllPermissionActions(): Promise<Partial<Permission>[]> {
    return this.createQueryBuilder('permission').select('permission.action AS action').groupBy('permission.action').getRawMany();
  }

  updatePermission(id: number, permissionData: Partial<Permission>): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Permission).set(permissionData).where('id = :id', { id }).returning('*').execute();
  }

  deletePermission(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Permission).where('id = :id', { id }).returning('*').execute();
  }
}
