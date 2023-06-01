import { Ability } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { PermissionAction } from '../../../constants/enums/permission-action.enum';
import { Permission } from '../../../../domain/entities/permission.entity';
import { AuthService } from '../../../../application/auth/auth.service';
import { CaslPermission } from '../../../interfaces/casl-permission.interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PermissionObjectType = any;

export type AppAbility = Ability<[PermissionAction, PermissionObjectType]>;

@Injectable()
export class CaslAbilityFactory {
  constructor(private authService: AuthService) {}

  async createForUser(role_id: number): Promise<AppAbility> {
    const dbPermissions: Permission[] = await this.authService.findAllPermissionsOfRole(role_id);

    const caslPermissions: CaslPermission[] = dbPermissions.map(p => {
      return {
        action: p.action as PermissionAction,
        subject: p.object.name
      };
    });

    return new Ability<[PermissionAction, PermissionObjectType]>(caslPermissions);
  }
}
