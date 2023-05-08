import { Module } from '@nestjs/common';
import { RolePermissionsService } from './role-permissions.service';
import { RolePermissionsController } from './role-permissions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolePermissions } from '../entities/role-permission.entity';
import { RolePermissionsRepository } from './role-permissions.repository';

@Module({
  imports: [TypeOrmModule.forFeature([RolePermissions])],
  controllers: [RolePermissionsController],
  providers: [RolePermissionsService, RolePermissionsRepository]
})
export class RolePermissionsModule {}
