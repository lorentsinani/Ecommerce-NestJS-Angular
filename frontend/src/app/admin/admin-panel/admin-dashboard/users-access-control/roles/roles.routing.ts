import { Route } from '@angular/router';
import { ListRolesComponent } from './list-roles/list-roles.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';

export const RolesRoute: Route[] = [
  { path: '', component: ListRolesComponent },
  { path: 'add-role', component: AddRoleComponent },
  { path: 'edit-role/:id', component: EditRoleComponent }
];
