import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from '../entities/permission.entity';
import { PermissionsRepository } from './permissions.repository';
import { Role } from '../entities/role.entity';
import { RolePermissions } from '../entities/role-permissions.entity';
import { Objects } from '../entities/objects.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Permission, Role, RolePermissions, Objects])],
  providers: [PermissionsService, PermissionsRepository],
  exports: [PermissionsService]
})
export class PermissionsModule {}
