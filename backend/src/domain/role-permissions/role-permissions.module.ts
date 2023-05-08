import { Module } from '@nestjs/common';
import { RolePermissionsService } from './role-permissions.service';
import { RolePermissionsController } from './role-permissions.controller';

@Module({
  controllers: [RolePermissionsController],
  providers: [RolePermissionsService]
})
export class RolePermissionsModule {}
