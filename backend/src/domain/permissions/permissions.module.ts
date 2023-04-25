import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from '../entities/permission.entity';
import { PermissionsRepository } from './permissions.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Permission])],
  providers: [PermissionsService, PermissionsRepository],
  exports: [PermissionsService]
})
export class PermissionsModule {}
