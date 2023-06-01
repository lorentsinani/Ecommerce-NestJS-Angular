import { Route } from '@angular/router';
import { ListObjectsComponent } from './list-objects/list-objects.component';
import { AddObjectComponent } from './add-object/add-object.component';
import { EditObjectComponent } from './edit-object/edit-object.component';

export const ObjectsRoute: Route[] = [
  {
    path: '',
    component: ListObjectsComponent
  },
  {
    path: 'add-object',
    component: AddObjectComponent
  },
  {
    path: 'edit-object/:id',
    component: EditObjectComponent
  }
];
