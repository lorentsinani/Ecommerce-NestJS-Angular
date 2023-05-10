import { ObjectsComponent } from './objects/objects.component';
import { ObjectsRoute } from './objects/objects.routing';
import { PermissionsRoute } from './permissions/permission.routing';
import { PermissionsComponent } from './permissions/permissions.component';
import { RolePermissionsComponent } from './role-permissions/role-permissions.component';
import { RolePermissionRoute } from './role-permissions/role-permissions.routing';
import { RolesComponent } from './roles/roles.component';
import { RolesRoute } from './roles/roles.routing';
import { UsersAccessControlComponent } from './users-access-control.component';
import { Route } from '@angular/router';

export const UsersAccessControlRoute: Route = {
  path: 'users-access-control',
  component: UsersAccessControlComponent,
  children: [
    { path: '', redirectTo: 'roles', pathMatch: 'full' },
    { path: 'roles', component: RolesComponent, children: RolesRoute },
    { path: 'role-permissions', component: RolePermissionsComponent, children: RolePermissionRoute },
    { path: 'permissions', component: PermissionsComponent, children: PermissionsRoute },
    { path: 'objects', component: ObjectsComponent, children: ObjectsRoute }
  ]
};
