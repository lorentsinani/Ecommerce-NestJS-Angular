import { AddRoleComponent } from './roles/add-role/add-role.component';
import { EditRoleComponent } from './roles/edit-role/edit-role.component';
import { ListRolesComponent } from './roles/list-roles/list-roles.component';
import { UsersAccessControlComponent } from './users-access-control.component';
import { Route } from '@angular/router';

export const UsersAccessControlRoute: Route = {
  path: 'users-access-control',
  component: UsersAccessControlComponent,
  children: [
    { path: '', component: ListRolesComponent },
    { path: 'add-role', component: AddRoleComponent },
    { path: 'edit-role/:id', component: EditRoleComponent }
  ]
};
