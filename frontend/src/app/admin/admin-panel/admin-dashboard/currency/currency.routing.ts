import { CreateFormComponent } from './create-form/create-form.component';
import { TableComponent } from './table/table.component';
import { Route } from '@angular/router';
import { CurrencyComponent } from './currency.component';
import { UpdateFormComponent } from './update-form/update-form.component';

export const CurrencyRoute: Route = {
  path: 'currency',
  component: CurrencyComponent,
  children: [
    {
      path: '',
      component: TableComponent
    },
    {
      path: 'create',
      component: CreateFormComponent
    },
    {
      path: 'update/:id',
      component: UpdateFormComponent
    }
  ]
};
