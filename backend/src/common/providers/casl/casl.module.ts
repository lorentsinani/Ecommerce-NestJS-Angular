import { Global, Module } from '@nestjs/common';
import { CaslAbilityFactory } from './casl-ability.factory/casl-ability.factory';
import { PermissionsGuard } from '../../guards/permissions.guard';
import { AuthModule } from '../../../application/auth/auth.module';

@Global()
@Module({
  imports: [AuthModule],
  providers: [PermissionsGuard, CaslAbilityFactory],
  exports: [PermissionsGuard, CaslAbilityFactory]
})
export class CaslModule {}
