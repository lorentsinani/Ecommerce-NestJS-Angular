import { Ability } from '@casl/ability';
import { PermissionAction } from '../../../common/constants/enums/permission-action.enum';
import { AuthService } from '../../auth/auth.service';
import { Permission } from '../../../domain/entities/permission.entity';
import { CaslPermission } from '../../../common/interfaces/casl-permission.interface';
import { Injectable } from '@nestjs/common';

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
    console.log(caslPermissions);
    return new Ability<[PermissionAction, PermissionObjectType]>(caslPermissions);
  }
}
