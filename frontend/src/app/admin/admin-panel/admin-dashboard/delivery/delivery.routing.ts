import { Route } from '@angular/router';
import { DeliveryComponent } from './delivery.component';
import { CreateFormDeliveryComponent } from './create-form-delivery/create-form-delivery.component';

export const DeliveryRoute: Route = {
  path: 'delivery',
  component: DeliveryComponent,
  children: [
    {
      path: 'create',
      component: CreateFormDeliveryComponent
    }
  ]
};
