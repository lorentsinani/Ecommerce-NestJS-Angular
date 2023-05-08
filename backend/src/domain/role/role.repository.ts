import { Injectable } from '@nestjs/common';
import { DataSource, DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Role } from '../entities/role.entity';
import { CreateRoleDto } from '../../common/dtos/role/create-role.dto';
import { UpdateRoleDto } from '../../common/dtos/role/update-role.dto';

@Injectable()
export class RoleRepository extends Repository<Role> {
  constructor(dataSource: DataSource) {
    super(Role, dataSource.createEntityManager());
  }

  createRole(createRoleDto: CreateRoleDto): Promise<InsertResult> {
    return this.createQueryBuilder().insert().into(Role).values(createRoleDto).returning('*').execute();
  }

  findAllRoles(): Promise<Role[]> {
    return this.find();
  }

  findRoleById(id: number): Promise<Role | null> {
    return this.createQueryBuilder('role').where('role.id = :id', { id }).getOne();
  }

  updateRole(id: number, updateRoleDto: UpdateRoleDto): Promise<UpdateResult> {
    return this.createQueryBuilder().update(Role).set(updateRoleDto).where('id = :id', { id }).returning('*').execute();
  }

  deleteRole(id: number): Promise<DeleteResult> {
    return this.createQueryBuilder().delete().from(Role).where('id = :id', { id }).returning('*').execute();
  }
}
