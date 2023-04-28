import { Injectable } from '@nestjs/common';
import { Role } from '../entities/role.entity';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService {
  constructor(private roleRepository: RoleRepository) {}

  findRoleById(role_id: number): Promise<Role | null> {
    return this.roleRepository.findRoleById(role_id);
  }
}
