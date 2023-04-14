import { Test, TestingModule } from '@nestjs/testing';
import { ProductDetailsController } from './product-details.controller';

describe('ProductDetailsController', () => {
  let controller: ProductDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductDetailsController],
    }).compile();

    controller = module.get<ProductDetailsController>(ProductDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
