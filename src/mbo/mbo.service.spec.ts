import { Test, TestingModule } from '@nestjs/testing';
import { MboService } from './mbo.service';

describe('MboService', () => {
  let service: MboService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MboService],
    }).compile();

    service = module.get<MboService>(MboService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
