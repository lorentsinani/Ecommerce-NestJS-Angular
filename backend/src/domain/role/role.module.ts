import { Module } from '@nestjs/common';
import { RoleService } from './role.service';

@Module({
  providers: [RoleService]
})
export class RoleModule {}
