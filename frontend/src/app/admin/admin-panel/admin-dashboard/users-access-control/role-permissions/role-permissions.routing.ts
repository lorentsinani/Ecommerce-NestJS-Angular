import { Route } from '@angular/router';
import { AddRolePermissionComponent } from './add-role-permission/add-role-permission.component';
import { EditRolePermissionsComponent } from './edit-role-permissions/edit-role-permissions.component';
import { ListRolesPermissionsComponent } from './list-roles-permissions/list-roles-permissions.component';

export const RolePermissionRoute: Route[] = [
  { path: '', component: ListRolesPermissionsComponent },
  { path: 'add-role-permission', component: AddRolePermissionComponent },
  { path: 'edit-role-permission/:id', component: EditRolePermissionsComponent }
];
