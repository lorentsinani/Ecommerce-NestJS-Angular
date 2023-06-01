import { TestBed } from '@angular/core/testing';

import { DeliveryMethodService } from './delivery-method.service';

describe('DeliveryMethodService', () => {
  let service: DeliveryMethodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryMethodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
