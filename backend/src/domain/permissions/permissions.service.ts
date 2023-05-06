import { Injectable } from '@nestjs/common';
import { PermissionsRepository } from './permissions.repository';
import { Permission } from '../entities/permission.entity';

@Injectable()
export class PermissionsService {
  constructor(private readonly permissionsRepository: PermissionsRepository) {}

  findAllPermissionsOfRole(role_id: number): Promise<Permission[]> {
    return this.permissionsRepository.findAllPermissionsOfRole(role_id);
  }
}
