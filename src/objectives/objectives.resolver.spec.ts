import { Test, TestingModule } from '@nestjs/testing';
import { ObjectivesResolver } from './objectives.resolver';
import { ObjectivesService } from './objectives.service';

describe('ObjectivesResolver', () => {
  let resolver: ObjectivesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObjectivesResolver, ObjectivesService],
    }).compile();

    resolver = module.get<ObjectivesResolver>(ObjectivesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
