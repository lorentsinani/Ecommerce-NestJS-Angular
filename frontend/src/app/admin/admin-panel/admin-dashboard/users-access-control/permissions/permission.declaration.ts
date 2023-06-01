import { AddPermissionComponent } from './add-permission/add-permission.component';
import { EditPermissionComponent } from './edit-permission/edit-permission.component';
import { ListPermissionsHeadComponent } from './list-permissions/head/head.component';
import { ListPermissionsComponent } from './list-permissions/list-permissions.component';
import { ListPermissionsRowComponent } from './list-permissions/row/row.component';
import { PermissionsComponent } from './permissions.component';

export const PermissionDeclarations = [
  PermissionsComponent,
  ListPermissionsComponent,
  EditPermissionComponent,
  AddPermissionComponent,
  ListPermissionsHeadComponent,
  ListPermissionsRowComponent
];
