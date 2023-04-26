import { Global, Module } from '@nestjs/common';
import { PermissionsGuard } from '../../common/guards/permissions.guard';
import { CaslAbilityFactory } from './casl-ability.factory/casl-ability.factory';
import { AuthModule } from '../auth/auth.module';

@Global()
@Module({
  imports: [AuthModule],
  providers: [PermissionsGuard, CaslAbilityFactory],
  exports: [PermissionsGuard, CaslAbilityFactory]
})
export class CaslModule {}
