import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Role } from '../entities/role.entity';

@Injectable()
export class RoleRepository extends Repository<Role> {
  constructor(dataSource: DataSource) {
    super(Role, dataSource.createEntityManager());
  }

  findRoleById(id: number): Promise<Role | null> {
    return this.createQueryBuilder('role').where('role.id = :id', { id }).getOne();
  }
}
