import { Test, TestingModule } from '@nestjs/testing';
import { Mailer } from './mailer';

describe('Mailer', () => {
  let provider: Mailer;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Mailer],
    }).compile();

    provider = module.get<Mailer>(Mailer);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
