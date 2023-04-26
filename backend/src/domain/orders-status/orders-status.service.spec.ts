import { Test, TestingModule } from '@nestjs/testing';
import { OrdersStatusService } from './orders-status.service';

describe('OrdersStatusService', () => {
  let service: OrdersStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersStatusService],
    }).compile();

    service = module.get<OrdersStatusService>(OrdersStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
