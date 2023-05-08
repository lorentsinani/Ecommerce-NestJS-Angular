import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Role } from '../entities/role.entity';
import { RoleRepository } from './role.repository';
import { CreateRoleDto } from '../../common/dtos/role/create-role.dto';
import { UpdateRoleDto } from '../../common/dtos/role/update-role.dto';
import { InsertResult } from 'typeorm';

@Injectable()
export class RoleService {
  private NotFoundExceptionMessage = 'Role is not found';
  private NotCreatedExceptionMessage = 'Role is not created';

  constructor(private roleRepository: RoleRepository) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const createdRole = await this.roleRepository.createRole(createRoleDto);

    if (this.getIdentifierId(createdRole)) {
      throw new HttpException(this.NotCreatedExceptionMessage, HttpStatus.BAD_REQUEST);
    }

    return createdRole.raw[0];
  }

  findAll(): Promise<Role[]> {
    return this.roleRepository.findAllRoles();
  }

  findRoleById(role_id: number): Promise<Role | null> {
    return this.roleRepository.findRoleById(role_id);
  }

  async findById(id: number): Promise<Role> {
    const role = await this.roleRepository.findRoleById(id);

    if (!role) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const updatedRole = await this.roleRepository.updateRole(id, updateRoleDto);

    if (!updatedRole.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return updatedRole.raw[0];
  }

  async delete(id: number): Promise<Role> {
    const deletedRole = await this.roleRepository.deleteRole(id);

    if (!deletedRole.affected) {
      throw new HttpException(this.NotFoundExceptionMessage, HttpStatus.NOT_FOUND);
    }

    return deletedRole.raw[0];
  }

  getIdentifierId(result: InsertResult): boolean {
    return result.identifiers[0].id == -1 ? false : true;
  }
}
