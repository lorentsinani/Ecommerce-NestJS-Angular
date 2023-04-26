import { Test, TestingModule } from '@nestjs/testing';
import { OrdersStatusController } from './orders-status.controller';

describe('OrdersStatusController', () => {
  let controller: OrdersStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersStatusController],
    }).compile();

    controller = module.get<OrdersStatusController>(OrdersStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
