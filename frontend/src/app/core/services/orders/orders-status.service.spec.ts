import { TestBed } from '@angular/core/testing';

import { OrdersStatusService } from './orders-status.service';

describe('OrdersStatusService', () => {
  let service: OrdersStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
