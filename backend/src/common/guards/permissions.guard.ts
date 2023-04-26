import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CaslAbilityFactory } from '../../application/casl/casl-ability.factory/casl-ability.factory';
import { PERMISSION_CHECKER_KEY, RequiredPermission } from '../decorators/check-permission.decorator';
import { Ability } from '@casl/ability';
import { JwtPayload, TokenVerifierCustomRequest } from '../interfaces/jwt-payload.interface';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector, private abilityFactor: CaslAbilityFactory) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.get<RequiredPermission[]>(PERMISSION_CHECKER_KEY, context.getHandler()) || [];

    const req = context.switchToHttp().getRequest() as TokenVerifierCustomRequest;
    const payload = req.jwtPayload as JwtPayload;

    const ability = await this.abilityFactor.createForUser(payload.user.role_id);
    console.log(ability);

    return requiredPermissions.every(permission => this.isAllowed(ability, permission));
  }

  private isAllowed(ability: Ability, permission: RequiredPermission): boolean {
    return ability.can(...permission);
  }
}
