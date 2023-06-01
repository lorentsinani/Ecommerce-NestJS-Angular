import { Route } from '@angular/router';
import { PermissionsComponent } from './permissions.component';
import { ListPermissionsComponent } from './list-permissions/list-permissions.component';
import { AddPermissionComponent } from './add-permission/add-permission.component';
import { EditPermissionComponent } from './edit-permission/edit-permission.component';

export const PermissionsRoute: Route[] = [
  {
    path: '',
    component: ListPermissionsComponent
  },
  {
    path: 'add-permission',
    component: AddPermissionComponent
  },
  {
    path: 'edit-permission/:id',
    component: EditPermissionComponent
  }
];
