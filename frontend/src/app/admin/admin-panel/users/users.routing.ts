import { Route } from '@angular/router';

import { UsersComponent } from './users.component';
import { UsersDetailsComponent } from './users-details/users-details.component'

export const UsersRoute: Route = {
    path: 'users',
    component: UsersComponent,
    children: [
        {
            path: 'details',
            component: UsersDetailsComponent
        }
    ]
};