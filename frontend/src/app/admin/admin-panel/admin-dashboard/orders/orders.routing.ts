import { Route } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';

export const OrdersRoute: Route = {
  path: 'orders',
  component: OrdersComponent,
  children: [
    {
      path: 'details',
      component: OrdersDetailsComponent
    }
  ]
};
