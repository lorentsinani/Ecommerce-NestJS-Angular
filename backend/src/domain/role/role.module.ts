import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../entities/role.entity';
import { RoleRepository } from './role.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RoleService, RoleRepository], 
  exports: [RoleService]
})
export class RoleModule {}
