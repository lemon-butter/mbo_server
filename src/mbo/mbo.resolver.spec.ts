import { Test, TestingModule } from '@nestjs/testing';
import { MboResolver } from './mbo.resolver';
import { MboService } from './mbo.service';

describe('MboResolver', () => {
  let resolver: MboResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MboResolver, MboService],
    }).compile();

    resolver = module.get<MboResolver>(MboResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
