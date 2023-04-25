import { Ability } from '@casl/ability';
import { PermissionAction } from '../../../common/constants/enums/permission-action.enum';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../../domain/entities/user.entity';
import { Permission } from '../../../domain/entities/permission.entity';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PermissionObjectType = any;

export type AppAbility = Ability<[PermissionAction, PermissionObjectType]>;

interface CaslPermission {
  action: PermissionAction;
  subject: string;
}

export class CaslAbilityFactory {
  constructor(private authService: AuthService) {}

  async createForUser(user: User): Promise<AppAbility> {
    const dbPermissions: Permission[] = await this.authService.findAllPermissionsOfUser(user);

    const caslPermissions: CaslPermission[] = dbPermissions.map(p => ({
      action: p.action as PermissionAction,
      subject: p.objects.find(obj => obj.id === p.object_id)?.name as string
    }));

    return new Ability<[PermissionAction, PermissionObjectType]>(caslPermissions);
  }
}
