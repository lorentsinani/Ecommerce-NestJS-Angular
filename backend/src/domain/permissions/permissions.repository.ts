import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Permission } from '../entities/permission.entity';

@Injectable()
export class PermissionsRepository extends Repository<Permission> {
  constructor(dataSource: DataSource) {
    super(Permission, dataSource.createEntityManager());
  }

  findAllPermissionsOfRole(role_id: number): Promise<Permission[]> {
    return this.createQueryBuilder('permission')
      .select(['permission.id', 'permission.action', 'object.name'])
      .innerJoin('permission.object', 'object')
      .innerJoin('permission.role_permissions', 'rp')
      .innerJoin('rp.role', 'role', 'role.id = :roleId', { roleId: role_id })
      .getMany();
  }
}
