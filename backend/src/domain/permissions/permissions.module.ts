import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from '../entities/permission.entity';
import { PermissionsRepository } from './permissions.repository';
import { Role } from '../entities/role.entity';
import { RolePermissions } from '../entities/role-permission.entity';
import { Objects } from '../entities/objects.entity';
import { PermissionsController } from './permissions.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Permission, Role, RolePermissions, Objects])],
  controllers: [PermissionsController],
  providers: [PermissionsService, PermissionsRepository],
  exports: [PermissionsService]
})
export class PermissionsModule {}
