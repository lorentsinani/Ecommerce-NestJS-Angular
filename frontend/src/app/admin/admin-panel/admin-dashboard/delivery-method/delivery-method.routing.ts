import { Route } from '@angular/router';
import { DeliveryMethodComponent } from './delivery-method.component';
import { CreateFormDeliveryMethodComponent } from './create-form-delivery-method/create-form-delivery-method.component';

export const DeliveryMethodRoute: Route = {
  path: 'delivery-method',
  component: DeliveryMethodComponent,
  children: [
    {
      path: 'create',
      component: CreateFormDeliveryMethodComponent
    }
  ]
};
