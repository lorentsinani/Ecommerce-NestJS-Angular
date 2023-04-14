import { Test, TestingModule } from '@nestjs/testing';
import { ProductDetailsService } from './product-details.service';

describe('ProductDetailsService', () => {
  let service: ProductDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductDetailsService],
    }).compile();

    service = module.get<ProductDetailsService>(ProductDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
