import { Injectable } from '@nestjs/common';
import { PermissionsRepository } from './permissions.repository';
import { Permission } from '../entities/permission.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class PermissionsService {
  constructor(private readonly permissionsRepository: PermissionsRepository) {}

  findAllPermissionsOfUser(user: User): Promise<Permission[]> {
    return this.permissionsRepository.findAllPermissionsOfUser(user);
  }
}
