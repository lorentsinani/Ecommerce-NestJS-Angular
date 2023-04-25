import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Permission } from '../entities/permission.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class PermissionsRepository extends Repository<Permission> {
  constructor(dataSource: DataSource) {
    super(Permission, dataSource.createEntityManager());
  }

  findAllPermissionsOfUser(user: User): Promise<Permission[]> {
    return this.createQueryBuilder('permission')
      .innerJoin('permission.objects', 'object')
      .innerJoin('role_permissions', 'rp', 'rp.permission_id = permission.id')
      .innerJoin('rp.roles', 'role', 'role.id = :roleId', { roleId: user.role.id })
      .getMany();
  }
}
